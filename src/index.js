import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import rootReducer from "./redux";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './index.scss';
import App from './components/app/App.container';
import registerServiceWorker from './services/registerServiceWorker';
import ApiService from './services/apiService';
import DataParser from './services/dataParser';

const mainTheme = createMuiTheme({
  drawerWidth: 240,
  palette: {
    type: 'dark',
    primary: {
      main: '#38003c',
      secondary: '#e90052'
    },
    secondary: {
      main: '#e90052'
    }
  },
});

let states = {};

Promise.all([
  ApiService.info(),
  ApiService.teams(),
  ApiService.additionTeams(),
  ApiService.standings(),
]).then(reponseObject => {
  states = {
    competitionStates: {
      info: reponseObject[0].data,
      teams: DataParser.combineTeamsData({basicData: reponseObject[1].data, addData: reponseObject[2].data}),
      standings: reponseObject[3].data,
      matches: {},
      activeTeam: -1
    }
  };

  Promise.all([
    ApiService.matches(states.competitionStates.info.currentSeason.currentMatchday),
    ApiService.getFutureMatches(),
    ApiService.matches(states.competitionStates.info.currentSeason.currentMatchday-1),
    ApiService.getLastResults()
  ]).then(matches => {
    states.competitionStates.matches[states.competitionStates.info.currentSeason.currentMatchday] = DataParser.combineFixtures({
      basicData: matches[0],
      addData: matches[1].data.matches,
      teams: states.competitionStates.teams.teams
    });

    if (matches[2]) {
      states.competitionStates.matches[states.competitionStates.info.currentSeason.currentMatchday-1] = DataParser.combineFixtures({
        basicData: matches[2],
        addData: matches[3].data.matches,
        teams: states.competitionStates.teams.teams
      });
    }

    const store = createStore(rootReducer, states);

    ReactDOM.render(
      <Provider store={store}>
        <MuiThemeProvider theme={mainTheme}>
          <HashRouter key="router">
            <App />
          </HashRouter>
        </MuiThemeProvider>
      </Provider>,
      document.getElementById('root')
    );
  });
});

registerServiceWorker();
