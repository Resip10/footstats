function DataParser() {
  function combineTeamsData({basicData, addData}) {
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

  function combineFixtures({basicData, addData, teams}) {
    let matches = basicData.matches.map(match => {
      let homeId = _getTeamSecondId({
        id: match.homeTeam.id,
        teams
      });

      let awayId = _getTeamSecondId({
        id: match.awayTeam.id,
        teams
      });

      let additionalMatch = _getMatch({
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

  function _getTeamSecondId({teams, id}) {
    let secondId;

    teams.forEach(team => {
      if (team.id === id) {
        secondId = team.secondId;
      }
    });

    return secondId;
  };

  function _getMatch({matches, homeId, awayId}) {
    let matchData;

    matches.forEach(match => {
      if (match.homeTeam.id === homeId && match.awayTeam.id === awayId) {
        matchData = {...match};
      }
    });

    return matchData;
  };

  return Object.freeze({
    combineTeamsData,
    combineFixtures
  })
}

export default DataParser();