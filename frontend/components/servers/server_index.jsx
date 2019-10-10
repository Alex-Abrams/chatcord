import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import ServerIndexItem from './server_index_item';
// can possibly have the loading come here
import ChannelIndexContainer from '../channels/channel_index_container';
import ChannelFormContainer from '../channels/channel_form_container';
import ServerFormContainer from './server_form_container';
import ProfileBar from './profile_bar';
//
import Test from '../test_components/test3_route';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);

  } // end constructor


  componentDidMount() {
    this.props.requestAllServers();
    this.props.requestFofflines();
  }


  render() {
    const { servers, logout, currentUser, requestServerChannels } = this.props;

    const profileBar = currentUser ? (
      <ProfileBar logout={logout} currentUser={currentUser} />
    ) : (
      null
    );


    const serversJoined = servers.filter(server => {
      return server.memberIds.includes(currentUser.id) || server.admin_id === currentUser.id;
    });

    return (
      <aside className="aside aside-servers">
        <ul id="serversPosition">
          {serversJoined.map(server =>
            <ServerIndexItem
            key={server.id}
            server={server}
            requestServerChannels={requestServerChannels} />)}

            <span className="new-server-widget">
              <Link className="plus" to="/servers/createorjoin">+</Link>
              <span className="new-server-widget-tooltip">Add a Server</span>
            </span>
        </ul>

        <div className="profile-bar">
        {profileBar}
        </div>
      </aside>
    ); // end return
  }// end render
}// end class

export default withRouter(ServerIndex);
