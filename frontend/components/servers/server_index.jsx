import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import ServerIndexItem from './server_index_item';
import ProfileBar from './profile_bar';
// can possibly have the loading come here
import ChannelIndexContainer from '../channels/channel_index_container';
//

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  } // end constructor

  componentDidMount() {
    this.props.requestAllServers();

  }


  render() {
    const { servers, logout, currentUser, serverId, requestServerChannels, channelIds, toggleServer, unToggleServer } = this.props;

    const profileBar = currentUser ? (
      <ProfileBar logout={logout} currentUser={currentUser} />
    ) : (
      <div>Not logged in</div>
    );


    // <Route exact path="/servers/:serverId/channels"
    //   render={(props) => <ChannelIndexContainer {...props} serverId={serverId} channelIds={channelIds} />}></Route>
    return (
      <div>
        <ul>
          {servers.map(server =>
            <ServerIndexItem
            key={server.id}
            server={server}
            serverId={server.id}
            channelIds={channelIds}
            requestServerChannels={requestServerChannels}
            toggleServer={toggleServer}
            unToggleServer={unToggleServer} />)}
        </ul>
        <br />


        <Link to="/servers/new">+</Link>

          <div className="profile-bar">
          {profileBar}
        </div>
        <div>
        </div>
      </div>
    ); // end return
  }// end render
}// end class

export default withRouter(ServerIndex);
