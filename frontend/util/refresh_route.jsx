import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from 'react-router-dom';


const Refresh = ({ component: Component, path, isDataAvailable, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     !isDataAvailable ? (
      <Component {...props} />
    ) : (
      <Redirect to="/servers" />
    )
  )} />
);

const mapStateToProps = state => {
  return {isDataAvailable: Boolean(Object.values(state.entities.servers).length === 0)};
};

// console.log(Object.values(state.entities.servers).length === 0);

export const RefreshedRoute = withRouter(connect(mapStateToProps)(Refresh));
