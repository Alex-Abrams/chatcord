import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ServerIndexContainer from './servers/server_index_container';
import ServerFormContainer from './servers/server_form_container';

const App = () => (
  <div>
    <header>
      <h1>ChatCord from app.jsx</h1>

    </header>
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <ProtectedRoute exact path="/servers/new" component={ServerFormContainer} />
    <ProtectedRoute exact path="/" component={ServerIndexContainer} />
    <ProtectedRoute path="/servers" component={ServerIndexContainer} />
  </div>
);

export default App;
