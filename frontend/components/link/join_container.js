import { connect } from 'react-redux';
import { selectAllServers, selectServerLinks } from '../../reducers/selectors';
import { createMembership } from '../../actions/server_actions';

const mapStateToProps = state => ({
  servers: selectAllServers(state),
  links: selectServerLinks(state)
});

const mapDispatchToProps = dispatch => ({
  createMembership: (user_Id, server_Id) => {dispatch(createMembership(user_Id, server_Id))},
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);
