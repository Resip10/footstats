import React from 'react';
import './teamIconMini.scss';

class TeamIconMini extends React.Component {
  render () {
    return (
      <div className="team-icon-mini">
        <img src={this.props.src} className={this.props.class}/>
      </div>
    );
  }
}

export default TeamIconMini;