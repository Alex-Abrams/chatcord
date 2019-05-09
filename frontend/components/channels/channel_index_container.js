import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { requestServerChannels } from '../../actions/channel_actions';
import { selectServerChannels, findActiveServer } from '../../reducers/selectors';


const mapStateToProps = (state, { serverId }) => ({
  currentUser: state.entities.users[state.session.id],
  channels: selectServerChannels(state, serverId),
  activeServerId: findActiveServer(state),
  // channelIds: state.entities.servers[serverId].channelIds,
  // come back here
});

const mapDispatchToProps = dispatch => ({
  requestServerChannels: (server_id) => dispatch(requestServerChannels(server_id)),
  ///
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
