import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import toggleReducer from './toggle_reducer';
import messageBoardReducer from './message_board_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  messageBoardReducer: messageBoardReducer,
  activeServer: toggleReducer
});

export default entitiesReducer;
