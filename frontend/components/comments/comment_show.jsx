import React from 'react';
import { Route, Link } from 'react-router-dom';

class CommentShow extends React.Component {
  constructor(props){
    super(props);

  } // c



  render() {
    const { comment, currentUserName, screenSize } = this.props;

/////////////////////////////
    const lineStarter = (comment) => {
      let lines = comment.length / 170;  //determine how many segments of 170
      let round = Math.floor(lines);
      let segments = (lines % 1 === 0) ? round : round + 1;
      let lineArray = [];
      let copyComment = comment;
      let position = 0;

      for (let i = 0; i < segments; i++) {
        let chunk = copyComment.slice(position, position + 170);
        lineArray.push(chunk);
        position += chunk.length;
      };

      return lineArray;
    }

    const correctedCommentLines = lineStarter(comment.body);

    const commentSize = (screenSize) ? 'commentSmall' : 'comment';

    // 2019-08-30T17:31:30.970Z
    const timeSlice = comment.created_at.slice(0, 10);
    const timeStamp = timeSlice.slice(5, 7) + "/" + timeSlice.slice(8, 10) + "/" + timeSlice.slice(0, 4);
/////////////////////////////
// <div className="comment-body">{comment.body}</div>

    return(
      <div className={commentSize}>
        <span className="comment-name">{comment.username}</span>
        <span id="timeStamp">{timeStamp}</span>
        <ul id="comment-line">
            {correctedCommentLines.map((line, index) => <li key={index}>{line}</li> )}
        </ul>
      </div>
    ); //r
  } // render
} //class


export default CommentShow;
