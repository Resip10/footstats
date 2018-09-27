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
      axios({
        method: 'get',
        url: `${PREFIX}/${this.pre}/${this.name}`,
        dataType: 'json',
        headers: { 'X-Auth-Token': TOKEN }
      })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        })
    });
  }

  getMatches({matchday = 1}) {
    return `${PREFIX}/${this.pre}/${this.name}?matchday=${matchday}`;
  }

}

export {
  Competition
};