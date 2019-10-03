import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LogoutPopup from './logout_popup';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  null,
  mapDispatchToProps
)(LogoutPopup);
