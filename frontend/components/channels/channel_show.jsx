import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
// import  MessageBoardContainer from '../msg_board/message_board_container';
import ChannelFormContainer from './channel_form_container';

class ChannelShow extends React.Component {


  render () {
    const { channel, server, serverId } = this.props;

    const channelDisplay = (
      <div>
        <Link id="channels-display"
          to={`/servers/${serverId}/channels/${channel.id}`}
          className="channelLinks">
          {channel.title}
        </Link>
      </div>
    );

    return(
      <div className="channelsList">
        <span>
          <div className="channelsList-hastag">#</div>
          {channelDisplay}
        </span>

        <span className="channel-invite-widget">
          <Link className="invite" id="invite"
            to={`/servers/${serverId}/channels/invite`}>&#9879;</Link>
          <span className="channel-invite-widget-tooltip">Create Invite</span>
        </span>
      </div>
    )
  }
};

export default ChannelShow;
