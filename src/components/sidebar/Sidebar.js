import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";
import Drawer from '@material-ui/core/Drawer';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InsertChartIcon from '@material-ui/icons/InsertChartRounded';
import BallotRoundedIcon from '@material-ui/icons/BallotRounded';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid/Grid";
import Avatar from "@material-ui/core/Avatar/Avatar";
import APL_AVATAR from "../../images/apl_avatar.png";
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";
import { ROUTES } from "../../redux/routeStates";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.isMenuOpen,
      activeName: this._getActiveName(),
      endDuration: true
    };
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      opened: newProps.isMenuOpen,
      activeName: this._getActiveName()
    });
  }

  _getActiveName = () => {
    return this.props.activeTeam === -1
      ? this.props.competitionInfo.name
      : this.props.teams[this.props.activeTeam].name
  };

  _getNextMatchweek = () => {
    let nextMatch;
    if (this.props.activeTeam === -1) {
      nextMatch = `Matchweek ${this.props.competitionInfo.currentSeason.currentMatchday}`;
    } else {
      nextMatch = `Next match: ${this.props.teams[this.props.activeTeam].name}`;
    }

    return nextMatch;
  };

  _mouseEnterHandler = () => {
    if (!this.state.endDuration) {
      return;
    }

    this.state.opened = true;
    this.state.endDuration = false;
    this.forceUpdate();
  };

  _mouseLeaveHandler = () => {
    this.state.opened = this.props.isMenuOpen;
    setTimeout(() => {
      this.state.endDuration = true;
      this.forceUpdate();
    }, 200);
    this.forceUpdate();
  };

  render() {
    const { classes, theme, isMenuOpen } = this.props;

    return (
      <Drawer
        style={{minWidth: '73px'}}
        variant="permanent"
        onMouseEnter={this._mouseEnterHandler}
        onMouseLeave={this._mouseLeaveHandler}
        transitionDuration={100}
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !this.state.opened && classes.drawerPaperClose,
            !isMenuOpen && !this.state.endDuration && classes.falseOpened
          ),
        }}
        open={this.state.opened}
      >
        <List component='nav'>
          <ListItem>
            <ListItemIcon>
              <Avatar
                alt="APL"
                src={APL_AVATAR}
                className={classNames(classes.avatar, classes.menuAvatar)}
              />
            </ListItemIcon>
            <ListItemText>
              <Grid container
                    wrap="nowrap"
                    direction="column">
                <Grid item>
                  <Typography color="textPrimary">
                    {this.state.activeName}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="secondary">
                    {this._getNextMatchweek()}
                  </Typography>
                </Grid>
              </Grid>
            </ListItemText>
          </ListItem>
          <Divider/>
          <Link
            to={'/'}
            replace={this.props.appRoute === ROUTES.HOME}
            style={{'textDecoration': 'none'}}
          >
            <ListItem
              button
              dense
              className={classNames(this.props.appRoute === ROUTES.HOME && classes.selected)}
            >
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link
            to={ROUTES.STATS}
            replace={this.props.appRoute === ROUTES.STATS}
            style={{'textDecoration': 'none'}}
          >
            <ListItem
              button
              dense
              className={classNames(this.props.appRoute === ROUTES.STATS && classes.selected)}
            >
              <ListItemIcon>
                <InsertChartIcon />
              </ListItemIcon>
              <ListItemText primary='Stats' />
            </ListItem>
          </Link>
          <Link
            to={ROUTES.CLUBS}
            replace={this.props.appRoute === ROUTES.CLUBS}
            style={{'textDecoration': 'none'}}
          >
            <ListItem
              button
              dense
              className={classNames(this.props.appRoute === ROUTES.CLUBS && classes.selected)}
            >
              <ListItemIcon>
                <BallotRoundedIcon />
              </ListItemIcon>
              <ListItemText primary='Clubs' />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  appRoute: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  competitionInfo: PropTypes.object.isRequired,
  standings: PropTypes.object.isRequired,
  teams: PropTypes.object.isRequired,
  activeTeam: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Sidebar;
