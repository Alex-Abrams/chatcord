import React from 'react';
import { Route, Link } from 'react-router-dom';

class CommentShow extends React.Component {
  constructor(props){
    super(props);
  } // c

  render() {
    const { comment, messageBoardId, currentUserName } = this.props;


    return(
      <div>
        <span>{comment.username}</span>
        <div>${messageBoardId}$</div>
        <div>{comment.body}--->{comment.msg_board_id}</div>
        <di>------</di>
      </div>
    ); //r
  } // render
} //class


export default CommentShow;
