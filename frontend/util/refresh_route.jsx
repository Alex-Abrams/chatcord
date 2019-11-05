import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from 'react-router-dom';



const Refresh = ({ component: Component, path, serversAvailable, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     !serversAvailable ? (
      <Component {...props} />
    ) : (
      <Redirect to="/servers" />
    )
  )} />
);


const mapStateToProps = state => {
  return {serversAvailable: Boolean(Object.values(state.entities.servers).length === 0)};
};

export const RefreshedRoute = withRouter(connect(mapStateToProps, null)(Refresh));
