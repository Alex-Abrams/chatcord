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
import WelcomeComments from './comments/default';
import WelcomeCommentsContainer from './comments/default_container';
import CreateJoin from './servers/create_or_join_server';

import JoinContainer from './link/join_container';
import { RefreshedRoute } from '../util/refresh_route';
import CommentsHeaderContainer from './comments/comments_header_container';
import LogoutPopupContainer from './servers/logout_popup_container';
import EntryPage from './servers/entry_page';


const App = () => (
  <div className="wrapper">
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/" component={ServerIndexContainer} />
      <ProtectedRoute path="/servers" component={ServerIndexContainer} />
      <ProtectedRoute path="/servers/createorjoin" component={CreateJoin} />
      <ProtectedRoute exact path="/servers/join" component={JoinContainer} />
      <ProtectedRoute exact path="/servers/new" component={ServerFormContainer} />

      <Switch>
        <RefreshedRoute path="/servers/:serverId/channels" component={ChannelIndexContainer} />
        <ProtectedRoute path="/servers/:serverId/channels" component={ChannelIndexContainer} />
      </Switch>

        <Switch>
          <ProtectedRoute exact path="/servers/:serverId/channels/:channel_id" component={CommentsIndexContainer} />
          <ProtectedRoute path="/servers/:serverId/channels" component={WelcomeCommentsContainer} />
        </Switch>

      <ProtectedRoute path="/servers/:serverId/channels/:channel_id" component={CommentsHeaderContainer} />
      <ProtectedRoute path="/servers/logout" component={LogoutPopupContainer} />
      <ProtectedRoute exact path="/servers" component={EntryPage} />

  </div>
);

export default App;
