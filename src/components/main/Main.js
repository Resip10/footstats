import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>{'Main content'}</Typography>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Main;
