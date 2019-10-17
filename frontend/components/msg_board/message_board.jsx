import React from 'react';
import { findChannelTitle } from '../../reducers/selectors';
import CommentsIndexContainer from '../comments/comments_index_container';

class MessageBoard extends React.PureComponent {
  constructor(props) {
    super(props);
  } // end constructor


  componentDidMount() {
    this.props.requestMessageBoard(this.props.channelId);
    this.props.requestAllComments(this.props.channelId);
  }

  componentDidUpdate(prevProps) {     // when switching channels within the same channel index
    if (this.props.channelId !== prevProps.channelId) {
      this.props.requestAllComments(this.props.channelId);
    }
  }


  render() {
    const { channelId, messageBoards } = this.props;

    return (
        <div class="messageBoard">
          <header class="messageBoard-header">{channelId}</header>
          <CommentsIndexContainer messageBoardId={channelId} messageBoards={messageBoards} />
        </div>
    ); //end return
  } // end render
}; //end class

export default MessageBoard;
