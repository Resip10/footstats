import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';
import classNames from 'classnames';
import APL_AVATAR from '../../images/apl_avatar.png'

import './Header.scss';


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
              <Grid container
                    direction="row"
                    spacing={Number(16)}
                    alignItems="center">
                <Fade in={!this.props.isMenuOpen}>
                <Grid key={"headerAvatar"} item>
                  <Avatar
                    alt="APL"
                    src={APL_AVATAR}
                    className={classNames(classes.avatar, classes.bigAvatar)}
                  />
                </Grid>
                </Fade>
                <Grid key={"headerTitle"} item>
                  <Typography variant="title" color="inherit">
                    Footstats
                  </Typography>
                </Grid>
              </Grid>
        </Toolbar>
      </AppBar>);
  }
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
