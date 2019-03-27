import { connect } from 'react-redux';

import ServerIndex from './server_index';
import { requestAllServers } from '../../actions/server_actions';
import { selectAllServers } from '../../reducers/selectors';

const mapStateToProps = state => ({
  servers: selectAllServers(state),
});

const mapDispatchToProps = dispatch => ({
  requestAllServers: () => dispatch(requestAllServers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerIndex);
