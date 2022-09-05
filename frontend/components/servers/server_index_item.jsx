import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
///
import ChannelIndexContainer from '../channels/channel_index_container';
import ChannelIndex from '../channels/channel_index';
import ChannelFormContainer from '../channels/channel_form_container';
///

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }


  handleImgClick() {
    this.props.resetServerChannels();
    this.props.requestServerChannels(this.props.server.id);
  }

  render() {
    const { server, serverId, channelIds, channels } = this.props;

    const first_channel = (typeof channels[0] === "undefined") ? null : channels[0].id;

    return (
      <div className="server">
        <span id="s-list">
          <li>
            <div className="server-list">
              <NavLink
                className="server-tooltip"
                to={`/servers/${server.id}/channels`}>

                <img className="discord-server-icon"
                  onClick={() => this.handleImgClick()}
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
