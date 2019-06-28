import ChannelForm from './channel_form';
import { connect } from 'react-redux';

import { createChannel } from '../../actions/channel_actions';
import { findActiveServer } from '../../reducers/selectors';
// import { createMessageBoard } from '../../actions/msg_board_actions';


const mapStateToProps = state => ({
  activeId: parseInt(match.params.serverId)
});


const mapDispatchToProps = dispatch => ({
  createChannel: (channel, server_id) => dispatch(createChannel(channel, server_id)),
  // createMessageBoard: (message_board) => dispatch(createMessageBoard(message_board))
});

export default connect(
  null,
  mapDispatchToProps
)(ChannelForm);
