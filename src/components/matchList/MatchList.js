import React, { Component } from 'react';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid/Grid';
import TeamIconMini from '../pure/teamIconMini/TeamIconMini';
import CustomTooltip from '../pure/tooltip/CustomTooltip';

import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";

import './matchList.scss';

class MatchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchesByDate: this._orderByDate([...props.content.matches])
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      matchesByDate: this._orderByDate([...newProps.content.matches])
    });
  }

  _convertComment(comment) {
    if (!comment) {
      return '';
    }

    return comment.replace(/\,/g, '\n');
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <List disablePadding className={'match-list'}>
        {Object.keys(this.state.matchesByDate).map(date => {
          return <div key={date}><ListSubheader component="div" className='match-list-date'>{date}</ListSubheader>
          {this.state.matchesByDate[date].map(match => {
            return (
              <CustomTooltip key={`${match.id}Tooltip`} toolText={this._convertComment(match.comment)}>
                <ListItem key={match.id} dense disableGutters>
                  <Grid container direction='row'>
                    <Grid item xs className='match-list-field'>
                      <TeamIconMini src={this._getTeam(match.homeTeam.id).crestUrl} class='flex-item'/>
                      <ListItemText primary={match.homeTeam.name} className='flex-item' />
                    </Grid>
                    <Grid item xs={2} className='flex-center match-list-field'>
                      <ListItemText className='flex-item' primary={this._getScore(match.score)} />
                    </Grid>
                    <Grid item xs className='match-list-field'>
                      <ListItemText primary={match.awayTeam.name} className='flex-item' />
                      <TeamIconMini src={this._getTeam(match.awayTeam.id).crestUrl} class='flex-item'/>
                    </Grid>
                  </Grid>
                </ListItem>
              </CustomTooltip>
            );
          })}</div>;
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

  _orderByDate = (matches) => {
    let dateArray = {};

    matches.forEach(match => {
      let yyyyddmm = this._getdateFromUtc(match.utcDate);

      if (dateArray[yyyyddmm]) {
        dateArray[yyyyddmm].push(match);
      } else {
        dateArray[yyyyddmm] = [match];
      }
    });

    return dateArray;
  };

  _getdateFromUtc = (utc) => {
    let date = new Date(utc);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  };

  _getScore = (scoreObject) => {
    let homeScore = scoreObject.fullTime.homeTeam === null ? '-' : scoreObject.fullTime.homeTeam;
    let awayScore = scoreObject.fullTime.awayTeam === null ? '-' : scoreObject.fullTime.awayTeam;

    return `${homeScore} : ${awayScore}`;
  };
}

MatchList.propTypes = {
  content: PropTypes.object.isRequired
};

export default MatchList;
