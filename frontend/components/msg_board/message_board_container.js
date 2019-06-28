import { connect } from 'react-redux';
import { requestMessageBoard } from '../../actions/msg_board_actions';
import { findMessageBoard, selectMessageBoards } from '../../reducers/selectors';
import MessageBoard from './message_board';
import {requestAllComments} from '../../actions/comment_actions';


const mapStateToProps = (state, {match}) => {
  const channel_id = parseInt(match.params.channel_id);
  const messageBoards = selectMessageBoards(state);
  return {
    channelId,
    messageBoards,
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
