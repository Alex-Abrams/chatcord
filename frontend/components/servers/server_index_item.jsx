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

    // this.state = {
    //   first_channel: null,
    // };

  }

  render() {
    const { server, serverId, channelIds, channels } = this.props;
// to={`/servers/${serverId}/channels/${channel.id}`}
  // console.log("serveritemprops", this.props);
  // console.log('channelIds', channelIds);
  // console.log('first', channels[0]);
  // if (typeof channels[0] === "undefined") {
  //   console.log('pee');
  // } else {
  //   // console.log("not undefined", channels[0].id);
  //   this.setState({first_channel: channels[0].id})
  // }

  const first_channel = (typeof channels[0] === "undefined") ? null : channels[0].id;

  // console.log(this.state.first_channel);
  console.log('gipper', first_channel);
    return (
      <div className="server">
        <span id="s-list">
          <li>
            <div className="server-list">
              <NavLink
                className="server-tooltip"
                to={`/servers/${server.id}/channels/${first_channel}`}>

                <img className="discord-server-icon"
                  onClick={() => this.props.resetServerChannels()}
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
