import {
  RECEIVE_FOFFLINES
} from '../actions/fofflines_actions';

import merge from 'lodash/merge';

const fofflinesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FOFFLINES:
      return merge({}, state, action.fofflines);
    default:
      return state;
  }
};

export default fofflinesReducer;
