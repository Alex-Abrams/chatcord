import React from 'react';
import { Route, Link } from 'react-router-dom';
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
    const { servers, logout, currentUser, serverId } = this.props;
    const profileBar = currentUser ? (
      <ProfileBar logout={logout} currentUser={currentUser} />
    ) : (
      <div>Not logged in</div>
    );

    // <Route to="servers/:serverId/channels/:channelId" component={ChannelIndexContainer} />
    return (
      <div>
        <ul>
          {servers.map(server =>
            <ServerIndexItem
            key={server.id}
            server={server}
            serverId={serverId} />)}
        </ul>
        <br />
        <Link to="/servers/new">+</Link>
        <div>
          {profileBar}
        </div>
        <div>
        </div>
      </div>
    ); // end return
  }// end render
}// end class

export default ServerIndex;
