import axios from 'axios';

const PREFIX = 'https://api.football-data.org/v2';
const TOKEN = '5eceb4be83b046ae93c483f30ce33dbe';

class Competition {
  constructor() {
    this.pre = 'competitions';
    this.name = 'PL';
  }

  info() {
    return new Promise((resolve, reject) => {
      this._getRequest(`${PREFIX}/${this.pre}/${this.name}`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        })
    });
  }

  teams() {
    return new Promise((resolve, reject) => {
      this._getRequest(`${PREFIX}/${this.pre}/${this.name}/teams`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        })
    });
  }

  standings() {
    return new Promise((resolve, reject) => {
      this._getRequest(`${PREFIX}/${this.pre}/${this.name}/standings`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        })
    });
  }

  matches(matchday) {
    return new Promise((resolve, reject) => {
      if (matchday < 1) {
        return resolve(null);
      }

      this._getRequest(`${PREFIX}/${this.pre}/${this.name}/matches?matchday=${matchday}`)
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