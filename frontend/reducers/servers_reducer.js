import {
  RECEIVE_ALL_SERVERS,
  RECEIVE_SINGLE_SERVER,
  CREATE_SERVER,
  DELETE_SERVER
} from '../actions/server_actions';

import { RECEIVE_SERVER_CHANNELS, RECEIVE_SINGLE_CHANNEL } from '../actions/channel_actions';
import merge from 'lodash/merge';

const serversReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_SERVERS:
      return merge({}, state, action.servers);
    case RECEIVE_SINGLE_SERVER:
      const newServer = { [action.server.id]: action.server };
      return merge({}, state, newServer);

    // case RECEIVE_SERVER_CHANNELS:
    //   const { channels } = action;
    //   const nextState = merge({}, state);
    //   Object.values(action.channels).forEach(channel => {
    //     nextState[channel.server_id].channelIds.push(channel.id);
    //   });
    //   return nextState;
    case RECEIVE_SINGLE_CHANNEL:
      const { channel } = action;
      const newState = merge({}, state);
      newState[channel.server_id].channelIds.push(channel.id);
      return newState;
    case DELETE_SERVER:
      nextState = merge({}, state);
      delete nextState[action.server.id];
      return nextState;

    default:
      return state;
  }
};

export default serversReducer;
