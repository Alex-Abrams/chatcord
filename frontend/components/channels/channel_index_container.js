import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { requestServerChannels } from '../../actions/channel_actions';
import { selectServerChannels, selectAllChannels } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, { match }) => {
  const currentUser = state.entities.users[state.session.id];
  const serverId = parseInt(match.params.serverId);
  // const channels = selectServerChannels(state, serverId);
  const channels = selectAllChannels(state);
  // const activeServerId = findActiveServer(state);
  return {
    currentUser,
    serverId,
    channels,
    // activeServerId,
  };
};

const mapDispatchToProps = dispatch => ({
  requestServerChannels: (server_id) => dispatch(requestServerChannels(server_id)),
  logout: () => dispatch(logout()),
  ///
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
