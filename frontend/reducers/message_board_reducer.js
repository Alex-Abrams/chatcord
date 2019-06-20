import {
  RECEIVE_MESSAGE_BOARD
} from '../actions/msg_board_actions';

import merge from 'lodash/merge';

const messageBoardReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_MESSAGE_BOARD:
      // no idea why its making me say message_board twice
      // state.entities.channels[channelId].title
      const {message_board} = action;
      // const newMessageBoard = { [action.message_board.message_board.id]: action.message_board.message_board};
      const newMessageBoard = { [action.message_board.id]: action.message_board};
      // without the messgae_board.messgae_board my store was coming out with a board within a board,
      // i tried a lot to fix this but I will either have to leave it or just come back to it later
      return merge({}, state, newMessageBoard);
    default:
      return state;
  }
};


export default messageBoardReducer;
