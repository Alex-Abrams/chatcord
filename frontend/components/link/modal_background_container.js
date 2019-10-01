import { connect } from 'react-redux';
import ModalBackground from './link';

const mapStateToProps = (state, {match}) => {
  const serverId = parseInt(match.params.serverId);
  return {
    serverId,
  };
};


export default connect(
  mapStateToProps,
  null
)(ModalBackground);
