import { connect } from 'react-redux';
import { selectAllServers, selectServerLinks } from '../../reducers/selectors';
import { createMembership } from '../../actions/server_actions';
import { receiveFormErrors } from '../../actions/error_actions';
import Join from './join';

const mapStateToProps = state => ({
  servers: selectAllServers(state),
  links: selectServerLinks(state),
  currentUserId: state.entities.users[state.session.id].id,
  error: state.errors.form.error,
});

const mapDispatchToProps = dispatch => ({
  createMembership: (user_Id, server_Id) => {dispatch(createMembership(user_Id, server_Id))},
  receiveFormErrors: (errors) => {dispatch(receiveFormErrors(errors))},
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);
