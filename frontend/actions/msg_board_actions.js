import * as APIUtil from '../util/msg_board_util';

export const RECEIVE_MESSAGE_BOARD = 'RECEIVE_MESSAGE_BOARD';
export const CREATE_MESSAGE_BOARD = 'CREATE_MESSAGE_BOARD';

export const receiveMessageBoard = (message_board) => ({
  type: RECEIVE_MESSAGE_BOARD,
  message_board
});

export const requestMessageBoard = id => dispatch => {
  APIUtil.fetchMessageBoard(id)
  .then(message_board => {dispatch(receiveMessageBoard(message_board))});
}
