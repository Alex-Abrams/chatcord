import ServerForm from './server_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createServer, createMembership } from '../../actions/server_actions';
import { createChannel } from '../../actions/channel_actions';
import { selectAllServers } from '../../reducers/selectors';


// save this for possibly having an errors container
const mapStateToProps = state => ({
  servers: selectAllServers(state),
});

const mapDispatchToProps = dispatch => ({
  createServer: (server) => dispatch(createServer(server)),
  createMembership: (user_Id, server_Id) => dispatch(createMembership(user_Id, server_Id)),
});

// export default connect(
//   null,
//   mapDispatchToProps
// )(ServerForm);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));
