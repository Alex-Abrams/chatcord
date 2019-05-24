import ServerForm from './server_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createServer } from '../../actions/server_actions';
import { createChannel } from '../../actions/channel_actions';


// save this for possibly having an errors container
// const mapStateToProps = state => ({
//
// });

const mapDispatchToProps = dispatch => ({
  createServer: (server) => dispatch(createServer(server)),
  // createChannel: (channel, server_id) => dispatch(createChannel(channel, server_id))
});

// export default connect(
//   null,
//   mapDispatchToProps
// )(ServerForm);

export default withRouter(connect(null, mapDispatchToProps)(ServerForm));
