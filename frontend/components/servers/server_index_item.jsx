import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
///
import ChannelIndexContainer from '../channels/channel_index_container';
import ChannelIndex from '../channels/channel_index';
import TestRoute from '../test_components/test_route';
import ChannelFormContainer from '../channels/channel_form_container';
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
        <li id="server-index-item">
          <NavLink to={`/servers/${server.id}/channels`} onClick={() => this.handleClick(server.id)} className="server-tooltip">
            <img className="discord-server-icon"
              src={server.image_url}
              alt={server.title}>
            </img>
            <span className="server-tooltip-text">{server.title}</span>
          </NavLink>

          <ChannelIndexContainer serverId={serverId} channelIds={channelIds} />
        </li>
      </div>
    );
  }

}


export default withRouter(ServerIndexItem);
