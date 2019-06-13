import {
  RECEIVE_MESSAGE_BOARD
} from '../actions/msg_board_actions';

import merge from 'lodash/merge';

const messageBoardReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_MESSAGE_BOARD:
      const messageBoard = { [action.message_board.id]: action.message_board };
      return merge({}, state, messageBoard);
    default:
      return state;
  }
};


export default messageBoardReducer;
