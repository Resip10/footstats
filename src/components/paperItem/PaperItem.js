import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import PropTypes from "prop-types";

class PaperItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <Paper className={classes.root}>
        <div className={classes.title}>
          <Typography variant="title" gutterBottom noWrap>{this.props.title}</Typography>
        </div>
        {this.props.children}
      </Paper>
    );
  }
}

PaperItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default PaperItem;
