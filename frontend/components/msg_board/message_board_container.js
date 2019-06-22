import { connect } from 'react-redux';
import { requestMessageBoard } from '../../actions/msg_board_actions';
import { findChannelTitle } from '../../reducers/selectors';
import MessageBoard from './message_board';
import {requestAllComments} from '../../actions/comment_actions';


const mapStateToProps = (state, {match}) => {
  const channelId = parseInt(match.params.channel_id);
  // const title = findChannelTitle(state, channelId);
  // const messageBoardId = parseInt(match.params.msg_board_id);
  // const title = match.params;
  return {
    // title,
    channelId,
    // messageBoardId,
  };
};

const mapDispatchToProps = dispatch => ({
  requestMessageBoard: (id) => dispatch(requestMessageBoard(id)),
  requestAllComments: (id) => dispatch(requestAllComments(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoard);
