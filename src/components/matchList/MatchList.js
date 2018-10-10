import React, { Component } from 'react';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid/Grid';

import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";

class MatchList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <List disablePadding>
        {this.props.content.matches.map(match => {
          return (
            <ListItem key={match.id} dense disableGutters>
              <Grid container direction='row'>
                {/*<Grid item xs>
                  <ListItemText primary={match.utcDate.split('T')[0]} />
                </Grid>*/}
                <Grid item xs className={classes.rowGrid}>
                  <img src={this._getTeam(match.homeTeam.id).crestUrl} className='mini-team-logo'/>
                  <ListItemText primary={match.homeTeam.name} />
                </Grid>
                <Grid item xs={2} className={classes.rowGrid}>
                  <ListItemText primary={`${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}`} />
                </Grid>
                <Grid item xs className={classes.rowGrid}>
                  <ListItemText primary={match.awayTeam.name} />
                  <img src={this._getTeam(match.awayTeam.id).crestUrl} className='mini-team-logo'/>
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
      </List>
    );
  }

  _getTeam = (teamId) => {
    let lookingTeam = {};
    this.props.teams.forEach(team => {
      if (team.id === teamId) {
        lookingTeam = team
      }
    });

    return lookingTeam;
  };
}

MatchList.propTypes = {
  content: PropTypes.object.isRequired
};

export default MatchList;
