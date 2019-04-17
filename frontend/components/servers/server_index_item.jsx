import React from 'react';
import { Link } from 'react-router-dom';
///
import ChannelIndexContainer from '../channels/channel_index_container';
// import { requestServerChannels } from '../../actions/channel_actions';
///

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { serverChannelIds, server, requestServerChannels } = this.props;

    return (
      <div>
        <li className="server-index-item">
          <Link to={`/servers/${server.id}/channels`}>
            <span>{server.id}</span>
            <img className="discord-server-icon"
              src={server.image_url}
              alt={server.title} />
          </Link>
          <ChannelIndexContainer serverId={server.id} />
        </li>
      </div>
    )
  }

}


export default ServerIndexItem;
