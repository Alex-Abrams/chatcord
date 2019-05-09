import { connect } from 'react-redux';

import ServerIndex from './server_index';
import { requestAllServers } from '../../actions/server_actions';
import { selectAllServers, findActiveChannels } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';
import { requestServerChannels } from '../../actions/channel_actions';
import { toggleServer, unToggleServer } from '../../actions/toggle_actions';


const mapStateToProps = (state, { match }) => ({     //there was an (   and before the last } there was another )
  servers: selectAllServers(state),
  currentUser: state.entities.users[state.session.id],
  //////////////////
  serverId: parseInt(match.params.serverId),
  ////////////////
});



const mapDispatchToProps = dispatch => ({
  requestAllServers: () => dispatch(requestAllServers()),
  logout: () => dispatch(logout()),
  requestServerChannels: (server_id) => dispatch(requestServerChannels(server_id)),
  //////////////////
  fetchServerChannels: (server_id) => dispatch(fetchServerChannels(server_id)),
  toggleServer: (server_id) => dispatch(toggleServer(server_id)),
  unToggleServer: () => dispatch(unToggleServer()),
  ////////////////////
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerIndex);
