import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';


class ChannelShow extends React.Component {


  render () {
    const { channel, server, serverId, activeServerId } = this.props;


    const channelDisplay = (channel.server_id === activeServerId) ? (
      <li id="channel-item">
        # {channel.title}
      </li>
    ) : (
      <div className="not-active-channel"></div>
    );


    return(
      <div>
          {channelDisplay}
      </div>
    )
  }
};

export default ChannelShow;


// <li className="channel-item">
//   {channel.title} 101010101 {channel.server_id}
