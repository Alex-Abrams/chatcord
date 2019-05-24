import ChannelForm from './channel_form';
import { connect } from 'react-redux';

import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, {match}) => {
  const serverId = parseInt(match.params.serverId);
  return {
    serverId,
  };
};


const mapDispatchToProps = dispatch => ({
  createChannel: (channel, server_id) => dispatch(createChannel(channel, server_id))
});

export default connect(
  null,
  mapDispatchToProps
)(ChannelForm);
