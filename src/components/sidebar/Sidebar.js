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
      expanded: false
    };
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.isMenuOpen) {
      this.setState({
        expanded: false
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
                    <Typography>
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
              <ListItemText primary='League statistics' />
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
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Sidebar;
