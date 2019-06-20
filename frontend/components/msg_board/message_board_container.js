import { connect } from 'react-redux';
import { requestMessageBoard } from '../../actions/msg_board_actions';
import { findChannelTitle } from '../../reducers/selectors';
import MessageBoard from './message_board';


const mapStateToProps = (state, {match}) => {
  const channelId = parseInt(match.params.channel_id);
  // const title = findChannelTitle(state, channelId);
  // const title = match.params;
  return {
    // title,
    channelId,
  };
};

const mapDispatchToProps = dispatch => ({
  requestMessageBoard: (id) => dispatch(requestMessageBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoard);
