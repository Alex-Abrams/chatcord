import React from 'react';
import { Route, Link } from 'react-router-dom';

class CommentShow extends React.Component {
  constructor(props){
    super(props);
  } // c

  render() {
    const { comment, messageBoardId, currentUserName } = this.props;

    console.log(this.props);
    return(
      <div>
        <span>{comment.username}</span>
        <div>{comment.body}--->{comment.id}</div>
        <di>------</di>
      </div>
    ); //r
  } // render
} //class


export default CommentShow;
