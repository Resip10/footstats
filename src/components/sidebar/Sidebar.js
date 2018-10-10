import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";
import Drawer from '@material-ui/core/Drawer';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InsertChartIcon from '@material-ui/icons/InsertChartRounded';
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
import { Link } from "react-router-dom";
import { ROUTES } from "../../redux/routeStates";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      activeName: this._getActiveName()
    };
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.isMenuOpen) {
      this.setState({
        expanded: false,
        activeName: this._getActiveName()
      });
    }
  }

  onExpandPanel = (e, expanded) => {
    this.setState({
      expanded: expanded
    });
  };

  redirectHandler = (pathName) => () => {
    return this.props.setRoute(pathName);
  };

  _getActiveName = () => {
    return this.props.activeTeam === -1
      ? this.props.competitionInfo.name
      : this.props.teams[this.props.activeTeam].name
  };

  _getSeasonDates = () => {
    return `${this.props.competitionInfo.currentSeason.startDate.split('-')[0]} /
    ${this.props.competitionInfo.currentSeason.endDate.split('-')[0]}`
  };

  _getNextMatchweek = () => {
    let nextMatch;
    if (this.props.activeTeam === -1) {
      nextMatch = `Next matchweek: ${this.props.competitionInfo.currentSeason.currentMatchday}`;
    } else {
      nextMatch = `Next match: this.props.teams[this.props.activeTeam].name`;
    }

    return nextMatch;
  };

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
          <Fade in={this.props.isMenuOpen}>
            <ExpansionPanel className={classes.expansionHeader} expanded={this.state.expanded} onChange={this.onExpandPanel}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container
                      wrap="nowrap"
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
                  <Grid item>
                    <Typography color="textPrimary">
                      {this.state.activeName}
                    </Typography>
                    <Typography color="secondary">
                      {this._getSeasonDates()}
                    </Typography>
                  </Grid>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails >
                <Grid container
                      wrap="nowrap"
                      direction="column"
                      spacing={Number(8)}
                      alignItems="stretch">
                  <Grid item>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">
                      {this._getNextMatchweek()}
                    </Typography>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Fade>
        </div>
        <List component='nav'>
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
