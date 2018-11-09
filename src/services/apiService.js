import axios from 'axios';

// TODO: call in prod mode
const PREFIX = 'https://api.football-data.org/v2';
const TOKEN = '5eceb4be83b046ae93c483f30ce33dbe';
const TOKEN_FREE_PREFIX = 'https://777score.com/api/v1';
const SEASON = 9711;
const COMPETITION_ID = 2;

class ApiService {
  static info() {
    return _getRequest({url: `${PREFIX}/competitions/PL`, isToken: true});
  }

  static teams() {
    return _getRequest({url: `${PREFIX}/competitions/PL/teams`, isToken: true});
  }

  static additionTeams() {
    return _getRequest({url: `${TOKEN_FREE_PREFIX}/tournaments/${COMPETITION_ID}/season/${SEASON}/teams`});
  }

  static standings() {
    return _getRequest({url: `${PREFIX}/competitions/PL/standings`, isToken: true});
  }

  static matches(matchday) {
    return new Promise((resolve, reject) => {
      let url = `${PREFIX}/competitions/PL/matches`;

      if (matchday) {
        url += `?matchday=${matchday}`;
      }

      _getRequest({url, isToken: true})
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        })
    });
  }

  static getLastResults() {
    return _getRequest({url: `${TOKEN_FREE_PREFIX}/tournaments/${COMPETITION_ID}/season/${SEASON}/results`});
  }

  static getFutureMatches() {
    return _getRequest({url: `${TOKEN_FREE_PREFIX}/tournaments/${COMPETITION_ID}/season/${SEASON}/calendar`});
  }
}

const _getRequest = ({url, isToken = false}) => {
  return axios({
    method: 'get',
    url: url,
    dataType: 'json',
    headers: isToken ? { 'X-Auth-Token': TOKEN } : {}
  });
};

export default ApiService;