import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import { HashRouter, withRouter } from "react-router-dom";
import rootReducer from "./redux";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './index.scss';
import App from './components/app/App.container';
import registerServiceWorker from './services/registerServiceWorker';

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

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={mainTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
