import { connect } from 'react-redux';
import { selectAllServers } from '../../reducers/selectors';

const mapStateToProps = state => ({
  servers: selectAllServers(state),
});
