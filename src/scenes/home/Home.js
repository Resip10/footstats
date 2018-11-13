import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import PaperItem from "../../components/paperItem/PaperItem.container";
import TableItem from "../../components/tableItem/TableItem.container";
import MatchList from "../../components/matchList/MatchList.container";
import PropTypes from "prop-types";
import TeamIconMini from "../../components/pure/teamIconMini/TeamIconMini"

import './home.scss';

class Home extends Component {
  render() {
    return (
      <Grid
        container
        spacing={24}
        alignContent="space-around"
      >
        <Grid item xs>
          <PaperItem title='Table'>
            <TableItem tableClassName='league-table' content={this._convertDataForTable()} />
          </PaperItem>
        </Grid>
        <Grid item xs>
          <PaperItem title='Last results'>
            <MatchList content={this.props.matches[this.props.nextTour-1]} />
          </PaperItem>
        </Grid>
        <Grid item xs>
          <PaperItem title='Next matchweek'>
            <MatchList content={this.props.matches[this.props.nextTour]} />
          </PaperItem>
        </Grid>
      </Grid>
    );
  }

  _convertDataForTable = () => {
    let tableContent = {};
    tableContent.data = this.props.standings.standings[0].table.map(row => {
      return {
        position: row.position,
        goalDifference: row.goalDifference,
        playedGames: row.playedGames,
        points: row.points,
        teamName: <div className='team-logo-name'><TeamIconMini src={row.team.crestUrl} /><Typography>{row.team.name}</Typography></div>,
      }
    });

    tableContent.columnNames = {
      position: 'Pos.',
      teamName: 'Club',
      playedGames: 'Games',
      goalDifference: 'Goal diff.',
      points: 'Points'
    };

    return tableContent;
  };
}

Home.propTypes = {
  standings: PropTypes.object.isRequired,
  matches: PropTypes.object.isRequired,
  nextTour: PropTypes.number.isRequired,
};

export default Home;
