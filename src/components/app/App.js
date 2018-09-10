import React, { Component } from 'react';
import Header from '../header/Header';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import './App.scss';
import PropTypes from "prop-types";
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '100vh'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
});

class App extends Component {
  state = {
    menuOpen: false
  };

  handleMenuOpen = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Header handleMenuOpen={this.handleMenuOpen} menuOpen={this.state.menuOpen} />
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.menuOpen && classes.drawerPaperClose),
          }}
          open={this.state.menuOpen}
        >
          <div className={classes.toolbar}>
            <Typography variant="title">
              Menu
            </Typography>
          </div>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{'Main content'}</Typography>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
