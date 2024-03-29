import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { requestServerChannels, resetServerChannels } from '../../actions/channel_actions';
import { selectAllChannels, selectServerTitle } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, { match }) => {
  const currentUser = state.entities.users[state.session.id];
  const serverId = parseInt(match.params.serverId);
  const serverTitle = selectServerTitle(state, serverId);
  const channels = selectAllChannels(state);
  return {
    currentUser,
    serverId,
    channels,
    serverTitle,
  };
};

const mapDispatchToProps = dispatch => ({
  requestServerChannels: (server_id) => dispatch(requestServerChannels(server_id)),
  logout: () => dispatch(logout()),
  resetServerChannels: () => dispatch(resetServerChannels()),
  ///
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
