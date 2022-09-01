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

  const root = document.getElementById('root');
  ///testing window
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ///
  ReactDOM.render(<Root store={store} />, root);
});
