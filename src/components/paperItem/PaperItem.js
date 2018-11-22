import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import PropTypes from "prop-types";
import './paperItem.scss';

class PaperItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <Paper className='paper-item'>
        <div className={classNames(classes.title, 'paper-item-title')}>
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
