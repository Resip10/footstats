class DataParser {
  static combineTeamsData({basicData, addData}) {
    let teams = basicData.teams.sort((teamA, teamB) => {
      if (teamA.shortName > teamB.shortName) {
        return 0;
      } else {
        return -1;
      }
    });

    basicData.teams = [...teams].map((team, idx) => {
      team.secondId = addData[idx].id;
      return team;
    });
    return basicData;
  }

  static combineFixtures({basicData, addData, teams}) {
    let matches = basicData.matches.map(match => {
      let homeId = this._getTeamSecondId({
        id: match.homeTeam.id,
        teams
      });

      let awayId = this._getTeamSecondId({
        id: match.awayTeam.id,
        teams
      });

      let additionalMatch = this._getMatch({
        matches: addData,
        homeId,
        awayId
      });

      return {
        comment: additionalMatch.comment,
        redCardsForHomeTeam: additionalMatch.redCardsForHomeTeam,
        redCardsForAwayTeam: additionalMatch.redCardsForAwayTeam,
        ...match
      };
    });

    basicData.matches = [...matches];
    return basicData;
  }

  static _getTeamSecondId({teams, id}) {
    let secondId;

    teams.forEach(team => {
      if (team.id === id) {
        secondId = team.secondId;
      }
    });

    return secondId;
  };

  static _getMatch({matches, homeId, awayId}) {
    let matchData;

    matches.forEach(match => {
      if (match.homeTeam.id === homeId && match.awayTeam.id === awayId) {
        matchData = {...match};
      }
    });

    return matchData;
  };
}

export default DataParser;