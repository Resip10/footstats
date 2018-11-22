import React from 'react';
import './sidebarBackground.scss';

const SidebarBackground = ({ imageUrl, ...props }) =>
  <div className="sidebar-background-image"
       style={{
         backgroundImage: `url(${imageUrl})`
       }}>
  </div>
;

export default SidebarBackground;