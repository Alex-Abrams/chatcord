import React from 'react';
import { Route, Link } from 'react-router-dom';

class CommentShow extends React.Component {
  constructor(props){
    super(props);

  } // c



  render() {
    const { comment, currentUserName, screenSize } = this.props;

    const commentSize = (screenSize) ? 'commentSmall' : 'comment';
    /////////////////////////////

    // 2019-08-30T17:31:30.970Z
    const timeSlice = comment.created_at.slice(0, 10);
    const timeStamp = timeSlice.slice(5, 7) + "/" + timeSlice.slice(8, 10) + "/" + timeSlice.slice(0, 4);

    return(
      <div className={commentSize}>
        <span className="comment-name">{comment.username}</span>
        <span id="timeStamp">{timeStamp}</span>
        <div id="comment-line">{comment.body}</div>
      </div>
    ); //r
  } // render
} //class


export default CommentShow;
