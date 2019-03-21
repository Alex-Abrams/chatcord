// GreetingContainer passes as props to the presentational component currentUser from the state and
// the logout action creator.
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

// in order to get the current users infor from out state, we will need to use state.session.id to get
// the id of the current user and then use this id to get the info from state.entities.users
const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Greeting);
