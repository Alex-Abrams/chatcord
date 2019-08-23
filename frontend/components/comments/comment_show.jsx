import React from 'react';
import { Route, Link } from 'react-router-dom';

class CommentShow extends React.Component {
  constructor(props){
    super(props);
  } // c

  startNextLine(comment) {
    let commentSplit = [];
    for(i = 0; i < comment.length; i ++) {
      if (comment.length <= 50) {
        return comment;
      } else {

      }
    }
  }

  render() {
    const { comment, currentUserName } = this.props;



    return(
      <div className="comment">
        <span className="comment-name">{comment.username}</span>
        <div className="comment-body">{comment.body}</div>
      </div>
    ); //r
  } // render
} //class


export default CommentShow;
