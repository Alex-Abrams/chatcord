import {
  TOGGLE_SERVER,
  UNTOGGLE_SERVER
} from '../actions/toggle_actions';

import merge from 'lodash/merge';

const toggleReducer = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_SERVER:
      //
      const toggledServer = { ["serverId"]: action.server_id};
      return merge({}, state, toggledServer);

    case UNTOGGLE_SERVER:
      const nextState = merge({}, state);
      delete nextState["serverId"];
      return nextState;
    default:
      return state;
  }
};

export default toggleReducer;
