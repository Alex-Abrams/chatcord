import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { createMembership } from '../../actions/server_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    createMembership: (userId, serverId) => dispatch(createMembership(userId, serverId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
