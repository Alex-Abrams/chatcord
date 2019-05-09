import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
///
import ChannelIndexContainer from '../channels/channel_index_container';
import ChannelIndex from '../channels/channel_index';
import TestRoute from '../test_components/test_route';
///

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

    handleClick(server_id) {
      this.props.unToggleServer();
      this.props.toggleServer(server_id);
    }

    // <Route path="/servers/:serverId/channels"
    //   render={(props) => <ChannelIndexContainer {...props} serverId={serverId} channelIds={channelIds} />}></Route>


    // <Link to={`/servers/${server.id}/channels`}>TestLink</Link>
    // <button onClick={this.toggleHidden.bind(this)}>testyboy</button>
    // {!this.state.isHidden && <ChannelIndexContainer serverId={serverId} channelIds={channelIds} />}

  render() {
    const { server, serverId, channelIds } = this.props;


    return (
      <div>

        <li className="server-index-item">
          <NavLink to={`/servers/${server.id}/channels`}>
            <span>{server.id}</span>
            <img className="discord-server-icon"
              src={server.image_url}
              alt={server.title} />
          </NavLink>

          <button onClick={() => this.handleClick(server.id)}>toggleTest</button>
          <ChannelIndexContainer serverId={serverId} channelIds={channelIds} />

        </li>
      </div>
    );
  }

}


export default ServerIndexItem;
