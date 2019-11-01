import ServerForm from './server_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createServer, createMembership } from '../../actions/server_actions';
import { createChannel } from '../../actions/channel_actions';
import { selectAllServers } from '../../reducers/selectors';


const mapStateToProps = state => ({
  servers: selectAllServers(state),
});

const mapDispatchToProps = dispatch => ({
  createServer: (server) => dispatch(createServer(server)),
  createMembership: (user_Id, server_Id) => dispatch(createMembership(user_Id, server_Id)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));
