import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
//
import { requestServerChannels, requestSingleChannel, createChannel } from './actions/channel_actions';
import { receiveServerChannels } from './actions/channel_actions';
import { fetchServerChannels } from './util/channel_util';

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

  //////////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
