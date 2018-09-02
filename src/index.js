import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import './index.scss';
import App from './components/app/App';
import registerServiceWorker from './services/registerServiceWorker';

const mainTheme = createMuiTheme({
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

const FootstatsApp = () => (
    <MuiThemeProvider theme={mainTheme}>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(<FootstatsApp />, document.getElementById('root'));
registerServiceWorker();
