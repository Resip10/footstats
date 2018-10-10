import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import './App.scss';
import PropTypes from "prop-types";
import Header from '../header/Header.container';
import Sidebar from '../sidebar/Sidebar.container';
import Main from '../main/Main.container';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

App.propTypes = {
  competitionInfo: PropTypes.object.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default App;
