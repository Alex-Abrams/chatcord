import * as APIUtil from '../util/api_util';

export const RECEIVE_SINGLE_SERVER = 'RECEIVE_SINGLE_SERVER';
export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const DELETE_SERVER = 'DELETE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const CREATE_SERVER = 'CREATE_SERVER';


//thunk action creators

export const requestAllServers = () => dispatch => {
  APIUtil.fetchAllServers()
  .then(servers => {dispatch(receiveAllServers(servers))});
}

export const requestSingleServer = id => dispatch => {
  APIUtil.fetchSingleServer(id)
  .then(server => {dispatch(receiveSingleServer(server))});
}

export const createServer = server => dispatch => {
  APIUtil.createServer(server)
  .then(server => {dispatch(receiveSingleServer(server))});
}

export const removeServer = id => dispatch => {
  APIUtil.deleteServer(id)
  .then(server => {dispatch(deleteServer(server))});
}
//action creators

export const receiveAllServers = servers => ({
  type: RECEIVE_ALL_SERVERS,
  servers
});

export const receiveSingleServer = ({ server, channels }) => ({
  type: RECEIVE_SINGLE_SERVER,
  server,
  channels,
});

export const deleteServer = server => ({
  type: DELETE_SERVER,
  server
});

export const receiveServerErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});
