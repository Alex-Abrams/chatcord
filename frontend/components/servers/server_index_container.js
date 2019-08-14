import { connect } from 'react-redux';

import ServerIndex from './server_index';
import { requestAllServers } from '../../actions/server_actions';
import { selectAllServers, findActiveChannels } from '../../reducers/selectors';
import { requestServerChannels } from '../../actions/channel_actions';


import { requestFofflines } from '../../actions/fofflines_actions'; //// temp for offline simulation


const mapStateToProps = (state, { match }) => ({
  servers: selectAllServers(state),
  currentUser: state.entities.users[state.session.id],
  serverId: parseInt(match.params.serverId),
});



const mapDispatchToProps = dispatch => ({
  requestAllServers: () => dispatch(requestAllServers()),
  requestServerChannels: (server_id) => dispatch(requestServerChannels(server_id)),
  //////////////////
  fetchServerChannels: (server_id) => dispatch(fetchServerChannels(server_id)),
  requestFofflines: () => dispatch(requestFofflines()),
  ////////////////////
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerIndex);
