import React from 'react';
import { Route, Link } from 'react-router-dom';
import ChannelIndexContainer from './channel_index_container';
import ChannelShow from './channel_show';

//
import TestRoute from '../test_components/test_route';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestServerChannels(this.props.serverId);
  }


  render() {
    const { channels, serverId, channelIds, activeServerId } = this.props;

    const channelFilter = channels.filter(channel => {
      return channel.server_id === serverId;
    });

    // console.log(this.props.match.params.id); //undefined

    return(
      <div>
        <ul>
          {channelFilter.map(channel =>
            <ChannelShow
              key={channel.id}
              channel={channel}
              serverId={serverId}
              activeServerId={activeServerId} />)}
        </ul>
      </div>
    );


  }
}

export default ChannelIndex;
