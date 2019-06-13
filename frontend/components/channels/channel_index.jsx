import React from 'react';
import { Route, Link } from 'react-router-dom';
import ChannelIndexContainer from './channel_index_container';
import ChannelShow from './channel_show';
import MessageBoardContainer from '../msg_board/message_board_container';
//
import ChannelFormContainer from './channel_form_container';

//


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleNew = this.handleNew.bind(this);
  }


  componentDidMount() {
    if (this.props.serverId !== undefined) {
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

  // <Route path="/servers/:serverId/channels/:channel_id"
  //   render={(props) => <MessageBoardContainer {...props} />}></Route>


  render() {
    const { channels, serverId, channelIds, activeServerId } = this.props;

    const channelFilter = channels.filter(channel => {
      return channel.server_id === serverId;
    });

    const channelFormDisplay = (activeServerId === this.props.serverId) ? (
      <div className="textChannel">
        <div id="textChannelLabel">TEXT CHANNEL</div>

        <div className="newChannel-widget">
          <Link
            className="textChannel-plus"
            to={`/servers/${activeServerId}/channels/new`}
            id="newChannel"
            onClick={this.handleNew}>+</Link>
          <span className="newChannel-widget-tooltip">Create Channel</span>
        </div>

        </div>
    ) : (
      <div></div>
    );

    return(
      <div class="channels">
          {channelFormDisplay}
        <ul>
          {channelFilter.map(channel =>
            <ChannelShow
              key={channel.id}
              channel={channel}
              serverId={serverId}
              activeServerId={activeServerId} />)}
        </ul>


      </div>
    );


  }
}

export default ChannelIndex;
