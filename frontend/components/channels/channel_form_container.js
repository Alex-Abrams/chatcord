import ChannelForm from './channel_form';
import { connect } from 'react-redux';

import { createChannel, requestServerChannels } from '../../actions/channel_actions';
import { findActiveServer } from '../../reducers/selectors';


const mapStateToProps = (state, {match}) => {
  const serverId = parseInt(match.params.serverId);
  return {
    serverId,
  };
};


const mapDispatchToProps = dispatch => ({
  createChannel: (channel, server_id) => dispatch(createChannel(channel, server_id)),
  requestServerChannels: (channel, server_id) => dispatch(requestServerChannels(channel, server_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);
