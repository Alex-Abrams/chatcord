import { connect } from 'react-redux';
import { requestMessageBoard } from '../../actions/msg_board_actions';
import { findChannelTitle } from '../../reducers/selectors';
import MessageBoard from './message_board';

// may not need state to props
// const mapStateToProps = (state, {match}) => {
//   return {
//     serverId: match.params.serverId,
//     channelId: match.params.channel_id,
//     findChannelTitle: findChannelTitle(state, channelId),
//   };
// };
//
// const mapStateToProps = (state, {match}) => ({
//     serverId: match.params.serverId,
//     channelId: match.params.channel_id,
//     findChannelTitle: findChannelTitle(state, channelId),
// });

const mapStateToProps = (state, {match}) => {
  const serverId = match.params.serverId;
  const channelId = match.params.channel_id;
  const title = findChannelTitle(state, channelId);
  return {
    title,
    serverId,
    channelId,
  };
};

const mapDispatchToProps = dispatch => ({
  requestMessageBoard: () => dispatch(requestAllServers)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoard);
