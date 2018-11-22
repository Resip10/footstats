import React, { Component } from 'react';
import classNames from 'classnames';
import { Switch, Route, Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";
import { ROUTES } from "../../redux/routeStates";
import Home from "../../scenes/home/Home.container";

import './main.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextRoute: props.appRoute
    };
  }

  componentDidMount() {
    if (this.state.nextRoute !== this.props.appRoute) {
      this.changeRoute(this.state.nextRoute);
    }
  }

  componentDidUpdate() {
    this.changeRoute(this.state.nextRoute);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <main className={classNames(classes.content, 'app-main', theme.palette.type === 'dark' && 'app-main-dark')}>
        <div className={classNames(classes.toolbar, 'app-main-toolbar')} />
        <Route exact path="/stats" render={this.renderAuthorizedView(ROUTES.STATS)} />
        <Route exact path="/" render={this.renderAuthorizedView(ROUTES.HOME)} />
        <Route exact path="/home" render={this.renderAuthorizedView(ROUTES.HOME)} />
        <Route exact path="/clubs" render={this.renderAuthorizedView(ROUTES.CLUBS)} />
      </main>
    );
  }

  /* Changes route in store if it's need */
  changeRoute = route => {
    if (this.props.route !== route) this.props.setRoute(route);
  };

  renderAuthorizedView = route => () => {
    if (!route) {
      this.state.nextRoute = ROUTES.HOME;
      return (
        <Home />
      );
    }

    switch (route) {
      case ROUTES.HOME:
        this.state.nextRoute = ROUTES.HOME;
        return (
          <Home />
        );
      case ROUTES.STATS:
        this.state.nextRoute = ROUTES.STATS;
        return (
          <Typography noWrap>{'Statistics'}</Typography>
        );
      case ROUTES.CLUBS:
        this.state.nextRoute = ROUTES.CLUBS;
        return (
          <Typography noWrap>{'Clubs list'}</Typography>
        );

      default:
        return <Redirect to="/" push />;
    }
  };
}

Main.propTypes = {
  appRoute: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Main;
