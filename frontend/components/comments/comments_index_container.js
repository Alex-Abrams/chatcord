import {
  createComment,
  requestSingleComment,
  requestAllComments
} from '../../actions/comment_actions';

import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { selectAllComments, selectTitle } from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => {
  const currentUser = state.entities.users[state.session.id];
  const comments = selectAllComments(state);
  const currentUserName = (state.entities.users[state.session.id]).username;
  const channel_id = parseInt(match.params.channel_id);
  const title = selectTitle(state, channel_id);
  return {
    currentUser,
    comments,
    currentUserName,
    channel_id,
    title,
  };
};

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  requestAllComments: (msg_board_id) => dispatch(requestAllComments(msg_board_id)),
  requestSingleComment: (id) => dispatch(requestSingleComment(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);
