import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';


class ChannelShow extends React.Component {


  render () {
    const { channel, server, serverId, activeServerId } = this.props;

    const channelDisplay = (channel.server_id === activeServerId) ? (
      // <li id="channel-item">
      //   # {channel.title}
      // </li>

      <Link to={`/servers/${serverId}/channels/${channel.id}`}
        className="channelLinks">
        # {channel.title}
      </Link>
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
