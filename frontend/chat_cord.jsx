import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
//
import { requestServerChannels, requestSingleChannel } from './actions/channel_actions';
import { receiveServerChannels , receiveSingleChannel, createChannel } from './actions/channel_actions';
import { fetchServerChannels } from './util/channel_util';
import { requestSingleServer, receiveSingleServer, requestAllServers, createServer } from './actions/server_actions';
import { toggleServer, unToggleServer } from './actions/toggle_actions';
import { fetchSingleServer } from './util/api_util';
import { fetchMessageBoard } from './util/msg_board_util';
import { requestMessageBoard } from './actions/msg_board_actions';
//

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  /////////////////////////
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchMessageBoard = fetchMessageBoard;
  window.requestMessageBoard = requestMessageBoard;
  // window.requestSingleChannel = requestSingleChannel;
  // window.requestServerChannels = requestServerChannels;
  // window.createChannel = createChannel;
  // window.receiveServerChannels = receiveServerChannels;
  // window.fetchServerChannels = fetchServerChannels;
  // window.requestSingleChannel = requestSingleChannel;
  // window.requestSingleServer = requestSingleServer;
  // window.receiveSingleChannel = receiveSingleChannel;
  //
  // window.receiveSingleServer = receiveSingleServer;
  // window.fetchSingleServer = fetchSingleServer;
  // window.createServer = createServer;
  // window.requestAllServers = requestAllServers;
  //
  // window.toggleServer = toggleServer;
  // window.unToggleServer = unToggleServer;
  //////////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
