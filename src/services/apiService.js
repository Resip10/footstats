import axios from 'axios';

// TODO: call in prod mode
const PREFIX = 'https://api.football-data.org/v2';
const TOKEN = '5eceb4be83b046ae93c483f30ce33dbe';

//  api to server mock (postman)
const FAKE_PREFIX = 'https://40c133a6-f5f1-4764-b81b-ed825f03edc1.mock.pstmn.io';

class Competition {
  constructor() {
    this.pre = 'competitions';
    this.name = 'PL';
  }

  info() {
    return this._getRequest(`${FAKE_PREFIX}/${this.pre}/${this.name}`);
  }

  teams() {
    return this._getRequest(`${FAKE_PREFIX}/${this.pre}/${this.name}/teams`);
  }

  standings() {
    return this._getRequest(`${FAKE_PREFIX}/${this.pre}/${this.name}/standings`);
  }

  matches(matchday) {
    return new Promise((resolve, reject) => {
      if (matchday < 1) {
        return resolve(null);
      }

      this._getRequest(`${FAKE_PREFIX}/${this.pre}/${this.name}/matches?matchday=${matchday}`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        })
    });
  }

  _getRequest(url) {
    return axios({
        method: 'get',
        url: url,
        dataType: 'json',
        headers: { 'X-Auth-Token': TOKEN }
      })
    ;
  }

}

export {
  Competition
};