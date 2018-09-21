import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !this.props.isMenuOpen && classes.drawerPaperClose),
        }}
        open={this.props.isMenuOpen}
      >
        <div className={classes.toolbar}>
          <Typography variant="title">
            Menu
          </Typography>
        </div>
        <List>
          <ListItem button >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Sidebar;
