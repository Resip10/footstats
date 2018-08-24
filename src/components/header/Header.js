import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import './Header.scss';

class Header extends Component {
  render() {
    return (
      <AppBar title="Footstats">
        <Toolbar>
          <Typography variant="title" color="inherit" >
            Footstats
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
