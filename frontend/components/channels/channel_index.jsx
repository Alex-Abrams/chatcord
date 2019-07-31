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

    this.handleNew = this.handleNew.bind(this);
  }


  componentDidMount() {
      this.props.requestServerChannels(this.props.serverId);
  }

  componentDidUpdate(prevprops) {
    if ((this.props.serverId !== prevprops.serverId) || (this.props.channels.length !== prevprops.channels.length)) {
      this.props.requestServerChannels(this.props.serverId);
    }
  }


  handleNew() {
    const fullApp = document.getElementById('fullApp');
    // fullApp.classList.toggle('active');
    fullApp.style.transition = "background-color 0.2s ease";
    fullApp.style.backgroundColor = "rgb(0, 0, 0)";
    // fullApp.style.opacity = "0.5";
    fullApp.style.zIndex = "1";
  }

  render() {
    const { channels, serverId } = this.props;


    const channelFilter = channels.filter(channel => {
      return channel.server_id === serverId;
    });


    const channelFormDisplay = (
      <div className="textChannel">
        <div id="textChannelLabel">TEXT CHANNEL</div>

        <div className="newChannel-widget">
          <Link
            className="textChannel-plus"
            to={`/servers/${serverId}/channels/new`}
            id="newChannel"
            onClick={this.handleNew}>+</Link>
          <span className="newChannel-widget-tooltip">Create Channel</span>
        </div>
      </div>
    );

    return(
      <aside class="aside aside-channels">
          {channelFormDisplay}
        <ul>
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
