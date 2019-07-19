import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Link, HashRouter, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ServerIndexContainer from './servers/server_index_container';
import ServerFormContainer from './servers/server_form_container';
//
import ChannelIndexContainer from './channels/channel_index_container';
import MessageBoard from './msg_board/message_board';
import CommentsIndexContainer from './comments/comments_index_container';
//
import FofflineContainer from './foffline/foffline_container';


const App = () => (
  <div className="wrapper">

      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <header className="header">REEEEEEEEEEEEEEEEEE</header>
      <ProtectedRoute exact path="/" component={ServerIndexContainer} />
      <ProtectedRoute path="/servers" component={ServerIndexContainer} />
      <ProtectedRoute exact path="/servers/new" component={ServerFormContainer} />
      <Route path="/servers/:serverId/channels" component={ChannelIndexContainer} />

      <Route exact path="/servers/:serverId/channels/:channel_id" component={CommentsIndexContainer} />
      <ProtectedRoute path="/servers" component={FofflineContainer} />
      <footer className="footer-1">HELLLLO</footer>



  </div>
);

export default App;
