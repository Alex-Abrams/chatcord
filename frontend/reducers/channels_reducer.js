import {
  RECEIVE_SERVER_CHANNELS,
  RECEIVE_SINGLE_CHANNEL,
} from '../actions/channel_actions';

import merge from 'lodash/merge';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SERVER_CHANNELS:
      return merge({}, state, action.channels);
    case RECEIVE_SINGLE_CHANNEL:
      channel_payload = action.payload.channel;
      return merge({}, state, { [channel_payload.id]: channel_payload });
    default:
      return state;
  }
};

export default channelsReducer;
