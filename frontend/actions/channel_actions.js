import * as APIUtil from '../util/channel_util';

export const RECEIVE_SINGLE_CHANNEL = 'RECEIVE_SINGLE_CHANNEL';
export const RECEIVE_SERVER_CHANNELS = 'RECEIVE_SERVER_CHANNELS';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CREATE_CHANNEL ='CREATE_CHANNEL';


// thunk action creators
export const requestServerChannels = server_id => dispatch => {
  APIUtil.fetchServerChannels(server_id)
  .then(channels => {dispatch(receiveServerChannels(channels))});
}

export const requestSingleChannel = id => dispatch => {
  APIUtil.fetchSingleChannel(id)
  .then(channel => {dispatch(receiveSingleChannel(channel))});
}

export const createChannel = (channel, server_id) => dispatch => {
  APIUtil.createChannel(channel, server_id)
  .then(channel => {dispatch(receiveSingleChannel(channel))});
}
//

export const receiveSingleChannel = channel => ({
  type: RECEIVE_SINGLE_CHANNEL,
  channel
});

export const receiveServerChannels = channels => ({
  type: RECEIVE_SERVER_CHANNELS,
  channels
});

export const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});
