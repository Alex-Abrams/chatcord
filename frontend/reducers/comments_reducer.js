import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_SINGLE_COMMENT
} from '../actions/comment_actions';

import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_SINGLE_COMMENT:
      const newComment = { [action.comment.id]: action.comment };
      return merge({}, state, newComment);
    default:
      return state;
  }
};

export default commentsReducer;
