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
import { Competition } from './services/apiService';

import api_mock from './api_mock.json';

let competition = new Competition();

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

/*Promise.all([
  competition.info(),
  competition.teams(),
  competition.standings(),
]).then(reponseObject => {*/
  let reponseObject = api_mock;
  let states = {
    competitionStates: {
      info: reponseObject[0],
      teams: reponseObject[1],
      standings: reponseObject[2],
      matches: {},
      activeTeam: -1
    }
  };

  Promise.all([
    competition.matches(reponseObject[0].currentSeason.currentMatchday),
    competition.matches(reponseObject[0].currentSeason.currentMatchday-1)
  ]).then(matches => {
    states.competitionStates.matches[reponseObject[0].currentSeason.currentMatchday] = matches[0];

    if (matches[1]) {
      states.competitionStates.matches[reponseObject[0].currentSeason.currentMatchday-1] = matches[1];
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
//});

registerServiceWorker();
