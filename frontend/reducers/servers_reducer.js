import {
  RECEIVE_ALL_SERVERS,
  RECEIVE_SINGLE_SERVER,
  CREATE_SERVER,
  DELETE_SERVER
} from '../actions/server_actions';

import merge from 'lodash/merge';

const serversReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_SERVERS:
      return merge({}, state, action.servers);
    case RECEIVE_SINGLE_SERVER:
      return Object.assign({}, state, {[action.server.id]: action.server});
    case DELETE_SERVER:
      nextState = merge({}, state);
      delete nextState[action.server.id];
      return nextState;
    case CREATE_SERVER:
    default:
      return state;
  }
};

export default serversReducer;
