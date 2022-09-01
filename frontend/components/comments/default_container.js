import { connect } from 'react-redux';
import WelcomeComments from './default';
import { selectAllChannels } from '../../reducers/selectors';
import { requestServerChannels, resetServerChannels } from '../../actions/channel_actions';



const mapStateToProps = (state, { match }) => ({
  channels: selectAllChannels(state),
  serverId: parseInt(match.params.serverId),
});

const mapDispatchToProps = dispatch => ({
  requestServerChannels: (server_id) => dispatch(requestServerChannels(server_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeComments);
