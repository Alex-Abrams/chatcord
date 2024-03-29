import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk, logger];

// if (process.env.NODE_ENV !== "production") {
//   const { logger } = require("redux-logger");
//   middlewares.push(logger);
// }


const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
