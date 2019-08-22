import { connect } from 'react-redux';
import { selectTitle } from '../../reducers/selectors';
import CommentsHeader from './comments_header';

const mapStateToProps = (state, {match}) => {
  const channel_id = parseInt(match.params.channel_id);
  const title = selectTitle(state, channel_id);
  return {
    title,
  };
};

export default connect(mapStateToProps, null)(CommentsHeader);
