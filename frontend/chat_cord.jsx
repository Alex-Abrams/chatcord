import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
//

// import { fetchMessageBoard } from './util/msg_board_util';
// import { requestMessageBoard, receiveMessageBoard, createMessageBoard } from './actions/msg_board_actions';
// import { requestAllComments, requestSingleComment, createComment } from './actions/comment_actions';
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
  // window.store = store;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  // window.fetchMessageBoard = fetchMessageBoard;
  // window.requestMessageBoard = requestMessageBoard;
  // window.createMessageBoard = createMessageBoard;
  // window.receiveMessageBoard = receiveMessageBoard;
  //
  // window.requestSingleComment = requestSingleComment;
  // window.requestAllComments = requestAllComments;
  // window.createComment = createComment;

  //////////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
