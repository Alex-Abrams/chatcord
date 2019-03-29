import { connect } from 'react-redux';

import ServerIndex from './server_index';
import { requestAllServers } from '../../actions/server_actions';
import { selectAllServers } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  servers: selectAllServers(state),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  requestAllServers: () => dispatch(requestAllServers()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerIndex);
