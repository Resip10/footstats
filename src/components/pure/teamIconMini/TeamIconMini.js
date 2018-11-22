import React from 'react';
import './teamIconMini.scss';

const TeamIconMini = ({src, classList, ...props}) =>
  <div className="team-icon-mini">
    <img src={src} className={classList}/>
  </div>
;

export default TeamIconMini;