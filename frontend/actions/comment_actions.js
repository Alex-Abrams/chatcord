import * as APIUtil from '../util/comment_util';

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';


export const receiveSingleComment = (comment) => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});

export const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});


export const createComment = (comment) => dispatch => {
  APIUtil.createComment(comment)
  .then(comment => {dispatch(receiveSingleComment(comment))});
}


export const requestSingleComment = (id) => dispatch => {
  APIUtil.fetchComment(id)
  .then(comment => {dispatch(receiveSingleComment(comment))});
}

export const requestAllComments = (msg_board_id) => dispatch => {
  APIUtil.fetchAllComments(msg_board_id)
  .then(comments => {dispatch(receiveAllComments(comments))});
}
