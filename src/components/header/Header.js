import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import APL_AVATAR from '../../images/apl_avatar.png'

import './Header.scss';

const drawerWidth = 240;
const styles = theme => ({
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
  }
});

class Header extends Component {
  handleMenuOpen = () => {
    this.props.openMenu(!this.props.isMenuOpen);
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <AppBar title="Footstats" position="absolute"
              className={classNames(classes.appBar, this.props.isMenuOpen && classes.appBarShift)}>
        <Toolbar className="major-toolbar">
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
      </AppBar>);
  }
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);
