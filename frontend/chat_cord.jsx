import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
//
import { login, logout, signup } from './actions/session_actions';
import { fetchAllServers } from './util/api_util';
import { requestAllServers, requestSingleServer, removeServer, receiveAllServers } from './actions/server_actions';

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
  window.login = login;
  window.logout = logout;
  window.fetchAllServers = fetchAllServers;
  window.requestAllServers = requestAllServers;
  window.receiveAllServers = receiveAllServers;
  window.requestSingleServer = requestSingleServer;
  window.removeServer = removeServer;
  //////////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
