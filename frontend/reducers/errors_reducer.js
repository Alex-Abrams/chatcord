// will combine reducers that handle errors
import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import formsErrorReducer from './forms_error_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  form: formsErrorReducer,
});

export default errorsReducer;
