import {
  RECEIVE_SERVER_CHANNELS,
  RECEIVE_SINGLE_CHANNEL,
} from '../actions/channel_actions';
import { RECEIVE_SINGLE_SERVER } from '../actions/server_actions';

import merge from 'lodash/merge';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SERVER_CHANNELS:
      return merge({}, state, action.channels);
    case RECEIVE_SINGLE_CHANNEL:
      const newChannel = { [action.channel.id]: action.channel };
      return merge({}, state, newChannel);
    case RECEIVE_SINGLE_SERVER:
      return merge({}, state, action.channels);
    default:
      return state;
  }
};

export default channelsReducer;
