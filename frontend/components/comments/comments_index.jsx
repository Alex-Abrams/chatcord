import React from 'react';
import { Route, Link } from 'react-router-dom';
import CommentShow from './comment_show';


class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);


  }// end constructor

  componentDidMount() {
    // this.props.requestAllComments(this.props.messageBoardId);
  }


  render() {
    const { messageBoardId, currentUserName, comments } = this.props;


    return(
      <div class="comments">
        <ul>
          {comments.map(comment =>
            <CommentShow
              key={comment.id}
              currentUserName={currentUserName}
              comment={comment}
              messageBoardId={messageBoardId} />)}
        </ul>
      </div>

    ); // end return
  } // end render
} // end class


export default CommentsIndex;
