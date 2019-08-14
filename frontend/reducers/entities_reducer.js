import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import commentsReducer from './comments_reducer';

// temporary and for simlutions purposes
import fofflinesReducer from './fofflines_reducer';
//

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  comments: commentsReducer,
  offline: fofflinesReducer
});

export default entitiesReducer;
