import React from 'react';
import { Route, Link } from 'react-router-dom';
import CommentShow from './comment_show';
import CommentForm from './comment_form';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);


  }// end constructor

  componentDidMount() {
    if (isNaN(this.props.channel_id) === false) {
      console.log('tits');
      this.props.requestAllComments(this.props.channel_id);
    };
  }


  componentDidUpdate(prevprops) {
    if ((this.props.channel_id !== prevprops.channel_id) && (isNaN(this.props.channel_id) === false))  {
      this.props.requestAllComments(this.props.channel_id);
    }
  }


  render() {
    const { currentUserName, comments, channel_id, title, currentUser, createComment } = this.props;
              /// prolly dont need currentUserName
    const commentsFilter = comments.filter(comment => {
      return comment.channel_id === channel_id;
    });

    // console.log(this.props);


    return(
      <div class="comments">
        <header className="put title here">{title}</header>
        <ul>
          {commentsFilter.map(comment =>
            <CommentShow
              key={comment.id}
              currentUserName={currentUserName}
              comment={comment}
              channel_id={channel_id} />)}
        </ul>
        <div className="comments-form">
          <CommentForm channelId={channel_id} createComment={createComment} />
        </div>
      </div>

    ); // end return
  } // end render
} // end class


export default CommentsIndex;
