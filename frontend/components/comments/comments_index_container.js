import {
  createComment,
  requestSingleComment,
  requestAllComments
} from '../../actions/comment_actions';

import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { selectAllComments } from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => ({ // ({})
  currentUser: state.entities.users[state.session.id],
  comments: selectAllComments(state),
  currentUserName: (state.entities.users[state.session.id]).username
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  requestAllComments: (msg_board_id) => dispatch(requestAllComments(msg_board_id)),
  requestSingleComment: (id) => dispatch(requestSingleComment(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);
