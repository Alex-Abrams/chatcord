import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
//
import { receiveFofflines, requestFofflines } from './actions/fofflines_actions';
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

  window.receiveFofflines = receiveFofflines;
  window.requestFofflines = requestFofflines;


  //////////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
