import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { requestServerChannels } from '../../actions/channel_actions';
import { selectServerChannels, findActiveServer } from '../../reducers/selectors';

//
// const mapStateToProps = (state, { serverId, match }) => ({
//   currentUser: state.entities.users[state.session.id],
//   channels: selectServerChannels(state, serverId),
//   activeServerId: findActiveServer(state),
//   // channelIds: state.entities.servers[serverId].channelIds,
//   test: parseInt(match.params.serverId)
//   // come back here
// });

const mapStateToProps = (state, { match }) => {
  const currentUser = state.entities.users[state.session.id];
  const serverId = parseInt(match.params.serverId);
  const channels = selectServerChannels(state, serverId);
  const activeServerId = findActiveServer(state);
  return {
    currentUser,
    serverId,
    channels,
    activeServerId,
  };
};

const mapDispatchToProps = dispatch => ({
  requestServerChannels: (server_id) => dispatch(requestServerChannels(server_id)),
  ///
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
