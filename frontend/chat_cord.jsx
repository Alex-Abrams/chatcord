import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
//
import { receiveFofflines, requestFofflines } from './actions/fofflines_actions';
import {createChannel} from './actions/channel_actions';
import {createMembership} from './actions/server_actions';
import {createServerLink} from './util/server_link_util';
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

  window.createServerLink = createServerLink;
  window.createMembership = createMembership;

  window.createChannel = createChannel;

  window.receiveFofflines = receiveFofflines;
  window.requestFofflines = requestFofflines;


  //////////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
