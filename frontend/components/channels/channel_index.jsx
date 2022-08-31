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
      // this.props.resetServerChannels();
      // .then(() => this.props.requestServerChannels(this.props.serverId));
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

        <div className="nitro">
          <img
            id="nitro-ad"
            src={"https://www.thespruce.com/thmb/7Ji-ofB-Lm9Fqs4Ho3fmFu0vnec=/640x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SPR-HOME-8-best-skateboards-3002842-01-e279e9059d6746118ff4da1971ec4c66.jpg"}
            alt={'nitro-pic'}>
          </img>
          <div className="nitro-p">
            <p id="nitro-p2">Want this server to feel unique?</p>
            <p id="nitro-p2">Unlock custom server banners with</p>
            <p id="nitro-p2">2 more boosts</p>
          </div>

          <button className="nitro-button">Boost This Server</button>
          <hr id="nitro-line"></hr>
        </div>

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
      <aside className="aside aside-channels">
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
