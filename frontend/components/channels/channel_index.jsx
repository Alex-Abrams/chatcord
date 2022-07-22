import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ChannelIndexContainer from './channel_index_container';
import ChannelShow from './channel_show';
//
import ChannelFormContainer from './channel_form_container';
import LinkContainer from '../link/link_container';
import {RefreshedRoute } from '../../util/refresh_route';

//


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
      this.props.requestServerChannels(this.props.serverId);
  }

  componentDidUpdate(prevprops) {
    if ((this.props.serverId !== prevprops.serverId) || (this.props.channels.length !== prevprops.channels.length)) {
      this.props.requestServerChannels(this.props.serverId);
    }
  }


  render() {
    const { channels, serverId, currentUser, logout, serverTitle } = this.props;



    const channelFilter = channels.filter(channel => {
      return channel.server_id === serverId;
    });

    const capitalTitle = serverTitle.charAt(0).toUpperCase() + serverTitle.slice(1);

    const channelFormDisplay = (
      <div className="textChannel">
        <header className="channelHeader">{capitalTitle} - Chatcord</header>

        <div className="textChannel-channelarea">
          <div id="textChannelLabel">TEXT CHANNEL</div>

          <div className="newChannel-widget">
            <Link
              className="textChannel-plus"
              to={`/servers/${serverId}/channels/new`}
              id="newChannel">+</Link>
            <span className="newChannel-widget-tooltip">Create Channel</span>
          </div>
        </div>
      </div>
    );

    return(
      <aside class="aside aside-channels">
        <div>
          {channelFormDisplay}
        </div>
        <ul className="channels-ul">
          {channelFilter.map(channel =>
            <ChannelShow
              key={channel.id}
              channel={channel}
              serverId={serverId} />)}
        </ul>

        <span>
          <Route path="/servers/:serverId/channels/new" component={ChannelFormContainer} />
        </span>

        <span>
            <RefreshedRoute path="/servers/:serverId/channels/invite" component={LinkContainer} />
        </span>


      </aside>
    );
  }
}


export default ChannelIndex;
