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
      // let length = comment.length;
      let lines = comment.length / 50;
      let round = Math.floor(lines);

      let segments = (lines % 1 === 0) ? round : round + 1;
      let lineArray = [];
      let copyComment = comment;
      let position = 0;

      for (let i = 0; i < segments; i++) {
        let chunk = copyComment.slice(position, position + 50);
        lineArray.push(chunk);
        position += chunk.length;
      };

      return lineArray;
    }

    const correctedCommentLines = lineStarter(comment.body);

    const commentSize = (screenSize) ? 'commentSmall' : 'comment';
    console.log(screenSize);

/////////////////////////////
// <div className="comment-body">{comment.body}</div>

    return(
      <div className={commentSize}>
        <span className="comment-name">{comment.username}</span>
        <ul>
            {correctedCommentLines.map((line, index) => <li key={index}>{line}</li> )}
        </ul>
      </div>
    ); //r
  } // render
} //class


export default CommentShow;
