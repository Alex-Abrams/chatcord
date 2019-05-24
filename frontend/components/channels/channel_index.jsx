import React from 'react';
import { Route, Link } from 'react-router-dom';
import ChannelIndexContainer from './channel_index_container';
import ChannelShow from './channel_show';
//
import ChannelFormContainer from './channel_form_container';

//
import TestRoute from '../test_components/test_route';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.serverId !== undefined) {
      this.props.requestServerChannels(this.props.serverId);
    }
    // console.log(this.props.serverId); //totally works
    //  OR somethign elese if no channels yet?
  }

  // <Route path="/servers/:serverId/channels"
  //   render={(props) => <ChannelFormContainer {...props} serverId={serverId} />}></Route>


  render() {
    const { channels, serverId, channelIds, activeServerId } = this.props;

    const channelFilter = channels.filter(channel => {
      return channel.server_id === serverId;
    });

    const channelFormDisplay = (activeServerId === this.props.serverId) ? (
      <Link to={`/servers/${activeServerId}/channels/new`}>+</Link>
    ) : (
      <div></div>
    );


    return(
      <div className="channel-bar">
        <ul>
          {channelFilter.map(channel =>
            <ChannelShow
              key={channel.id}
              channel={channel}
              serverId={serverId}
              activeServerId={activeServerId} />)}
        </ul>
        <div id="new-channel">
          {channelFormDisplay}
        </div>

      </div>
    );


  }
}

export default ChannelIndex;
