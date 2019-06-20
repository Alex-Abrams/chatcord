import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import toggleReducer from './toggle_reducer';
import messageBoardReducer from './message_board_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  messageBoard: messageBoardReducer,
  activeServer: toggleReducer,
  comments: commentsReducer
});

export default entitiesReducer;
