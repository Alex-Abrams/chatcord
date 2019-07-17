import { connect } from 'react-redux';
import Foffline from './foffline';
import { offlineList } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  offlineList: offlineList(state),
});


export default connect(
  mapStateToProps,
  null
)(Foffline);
