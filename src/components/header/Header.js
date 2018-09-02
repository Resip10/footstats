import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import APL_AVATAR from '../../images/apl_avatar.png'

import './Header.scss';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    height: 500,
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
  }
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
        <AppBar title="Footstats" position="absolute"
                className={classNames(classes.appBar, this.state.menuOpen && classes.appBarShift)}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open menu"
              onClick={this.handleMenuOpen}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <ExpansionPanel className="header-expanded">
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container
                      direction="row"
                      spacing={Number(16)}
                      alignItems="center">
                  <Grid key={"headerAvatar"} item>
                    <Avatar
                      alt="APL"
                      src={APL_AVATAR}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </Grid>
                  <Grid key={"headerTitle"} item>
                    <Typography variant="title" color="inherit">
                      Footstats
                    </Typography>
                  </Grid>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails >
                <div>
                  <Typography variant="caption">
                    Expanded
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <Typography variant="title">
              Menu
            </Typography>
          </div>
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);
