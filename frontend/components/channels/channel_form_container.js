import ChannelForm from './channel_form';
import { connect } from 'react-redux';

import { createChannel, requestServerChannels } from '../../actions/channel_actions';
import { findActiveServer } from '../../reducers/selectors';
// import { createMessageBoard } from '../../actions/msg_board_actions';


const mapStateToProps = state => ({
  activeId: parseInt(match.params.serverId)
});


const mapDispatchToProps = dispatch => ({
  createChannel: (channel, server_id) => dispatch(createChannel(channel, server_id)),
  requestServerChannels: (channel, server_id) => dispatch(requestServerChannels(channel, server_id)),
});

export default connect(
  null,
  mapDispatchToProps
)(ChannelForm);
