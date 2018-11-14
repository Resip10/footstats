import React from 'react';
import './sidebarBackground.scss';

class SidebarBackground extends React.Component {
  render () {
    let { imageUrl } = this.props;
    return (
      <div className="sidebar-background-image"
           style={{
             backgroundImage: `url(${imageUrl})`
           }}>
      </div>
    );
  }
}

export default SidebarBackground;