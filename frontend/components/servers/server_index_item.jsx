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

  render() {
    const { server, serverId, channelIds } = this.props;

    return (
      <div class="server">
        <span id="s-list">
          <li>
            <div className="server-list">
              <NavLink
                className="server-tooltip"
                to={`/servers/${server.id}/channels`}>

                <img className="discord-server-icon"
                  src={server.image_url}
                  alt={server.title}>
                </img>
                <span className="server-tooltip-text">{server.title}</span>
              </NavLink>
            </div>


          </li>
        </span>
      </div>
    );
  }

}


export default withRouter(ServerIndexItem);
