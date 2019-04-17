import React from 'react';
import { Route, Link } from 'react-router-dom';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  } // end constructor

  componentDidMount() {
    // a new server should always create a default channel
    // this.props.requestServerChannels(channels[0].server_id);
    // console.log(serverId);
    this.props.requestServerChannels(this.props.serverId);
    // console.log('HEEELELLO');
  }

  render() {
    const { channels, currentUser, serverId } = this.props;

    const channelFilter = channels.filter(channel => {
      return channel.server_id === serverId;
    });

    const channelList = channelFilter.map(channel => (
      <li key={channel.id}>
        {channel.title} ---> {channel.server_id}
      </li>
    ));


    return (
      <div>
        <ul>
          { channelList }
        </ul>
      </div>
    ); // end return
  } // end render
}

export default ChannelIndex;
