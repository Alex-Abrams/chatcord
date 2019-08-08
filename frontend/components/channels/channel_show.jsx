import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
// import  MessageBoardContainer from '../msg_board/message_board_container';
import ChannelFormContainer from './channel_form_container';

class ChannelShow extends React.Component {


  render () {
    const { channel, server, serverId } = this.props;

    const channelDisplay = (
      <Link id="channels-display"
        to={`/servers/${serverId}/channels/${channel.id}`}
        className="channelLinks">
        # {channel.title}
      </Link>
    );

    return(
      <div className="channelsList">
        <span>
          {channelDisplay}
        </span>

        <span>
          <Link className="invite" id="invite"
            to={`/servers/${serverId}/channels/invite`}>Inv</Link>
        </span>

      </div>
    )
  }
};

export default ChannelShow;
