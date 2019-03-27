import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import ServerIndexContainer from './servers/server_index_container';

const App = () => (
  <div>
    <header>
      <h1>ChatCord from app.jsx</h1>

    </header>
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Route path="/" component={ServerIndexContainer} />
    <Route path="/" component={GreetingContainer} />
  </div>
);

export default App;
