import React from 'react';
import { Route, Link, withRouter, NavLink } from 'react-router-dom';
import ServerIndexItem from './server_index_item';
import ChannelIndexContainer from '../channels/channel_index_container';
import ChannelFormContainer from '../channels/channel_form_container';
import ServerFormContainer from './server_form_container';
import ProfileBarContainer from './profile_bar_container';
//

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);

  } // end constructor


  componentDidMount() {
    this.props.requestAllServers();
    this.props.requestFofflines();
  }


  render() {
    const { servers, logout, currentUser, requestServerChannels, resetServerChannels, channels } = this.props;


    const serversJoined = servers.filter(server => {
      return server.memberIds.includes(currentUser.id) || server.admin_id === currentUser.id;
    });

    return (
      <aside className="aside aside-servers">
      <NavLink
        to={`/servers`}>
        <img
          id="chatcord-dm-icon"
          src={"https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png"}
          alt={'home_dm'}>
        </img>
      </NavLink>

        <hr id="chatcord-dm-icon-line"></hr>
        <ul id="serversPosition">
          {serversJoined.map(server =>
            <ServerIndexItem
            key={server.id}
            server={server}
            resetServerChannels={resetServerChannels}
            channels={channels}
            requestServerChannels={requestServerChannels} />)}

            <span className="new-server-widget">
              <Link className="plus" to="/servers/createorjoin">+</Link>
              <span className="new-server-widget-tooltip">Add a Server</span>
            </span>
        </ul>

        <ProfileBarContainer />


      </aside>
    ); // end return
  }// end render
}// end class

export default withRouter(ServerIndex);
