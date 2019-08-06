import { RECEIVE_FORM_ERRORS } from '../actions/error_actions';

import merge from 'lodash/merge';

const formsErrorReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FORM_ERRORS:
      return merge({}, state, action.errors);
    default:
      return state;
  }
};

export default formsErrorReducer;
