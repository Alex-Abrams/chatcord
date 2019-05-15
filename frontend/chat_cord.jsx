import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
//
import { requestServerChannels, requestSingleChannel, createChannel } from './actions/channel_actions';
import { receiveServerChannels , receiveSingleChannel } from './actions/channel_actions';
import { fetchServerChannels } from './util/channel_util';
import { requestSingleServer, receiveSingleServer } from './actions/server_actions';
import { toggleServer, unToggleServer } from './actions/toggle_actions';
import { fetchSingleServer, createServer } from './util/api_util';
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
  window.requestSingleChannel = requestSingleChannel;
  window.requestServerChannels = requestServerChannels;
  window.createChannel = createChannel;
  window.receiveServerChannels = receiveServerChannels;
  window.fetchServerChannels = fetchServerChannels;
  window.requestSingleChannel = requestSingleChannel;
  window.requestSingleServer = requestSingleServer;
  window.receiveSingleChannel = receiveSingleChannel;

  window.receiveSingleServer = receiveSingleServer;
  window.fetchSingleServer = fetchSingleServer;
  window.createServer = createServer;

  window.toggleServer = toggleServer;
  window.unToggleServer = unToggleServer;
  //////////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
