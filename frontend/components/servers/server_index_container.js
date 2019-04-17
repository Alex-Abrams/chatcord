import { connect } from 'react-redux';

import ServerIndex from './server_index';
import { requestAllServers } from '../../actions/server_actions';
import { selectAllServers } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';
import { requestServerChannels } from '../../actions/channel_actions';

const mapStateToProps = (state, { match }) => ({
  servers: selectAllServers(state),
  currentUser: state.entities.users[state.session.id],
  //////////////////
  serverId: parseInt(match.params.serverId),
  // channelIds: state.entities.server.channelIds,
  ////////////////////
});

const mapDispatchToProps = dispatch => ({
  requestAllServers: () => dispatch(requestAllServers()),
  logout: () => dispatch(logout()),
  requestServerChannels: (server_id) => dispatch(requestServerChannels(server_id)),
  //////////////////
  fetchServerChannels: (server_id) => dispatch(fetchServerChannels(server_id))
  ////////////////////
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerIndex);
