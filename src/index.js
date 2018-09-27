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

/*let competition = new Competition();
competition.info()
  .then((info) => {
    console.log(info);
  })
  .catch((error) => {
    console.log(error);
  })
;*/

const store = createStore(rootReducer);

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

registerServiceWorker();
