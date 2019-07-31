import { connect } from 'react-redux';
import Link from './link';
import { selectServerLink, selectServer } from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => {
  const serverId = parseInt(match.params.serverId);
  const serverLink = selectServerLink(state, serverId);
  const server = selectServer(state, serverId);
  return {
    serverId,
    serverLink,
    server,
  };
};

export default connect(
  mapStateToProps,
  null
)(Link);
