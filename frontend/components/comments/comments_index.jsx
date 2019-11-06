import React from 'react';
import { Route, Link } from 'react-router-dom';
import CommentShow from './comment_show';
import CommentForm from './comment_form';
import FofflineContainer from '../foffline/foffline_container';


class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smallScreen: false,
    };

  }// end constructor


  componentDidMount() {
    if (isNaN(this.props.channel_id) === false) {
      this.props.requestAllComments(this.props.channel_id);
    };
    if (window.innerWidth < 1950) {
      this.setState({ smallScreen: !this.state.smallScreen });
    };
  }


  componentDidUpdate(prevprops) {
    if ((this.props.channel_id !== prevprops.channel_id) && (isNaN(this.props.channel_id) === false))  {
      this.props.requestAllComments(this.props.channel_id);
    }
  }


  render() {
    const { currentUserName, comments, channel_id, title, currentUser, createComment } = this.props;

    const commentsFilter = comments.filter(comment => {
      return comment.channel_id === channel_id;
    });

    const screenSize = (this.state.smallScreen) ? 'mainSmall' : 'main';
    const mainListSize = (this.state.smallScreen) ? 'main-list-small' : 'main-list';

    return(
      <article className={screenSize}>
        <ul className={mainListSize}>
          {commentsFilter.map(comment =>
            <CommentShow
              key={comment.id}
              currentUserName={currentUserName}
              comment={comment}
              screenSize={this.state.smallScreen}
              channel_id={channel_id} />)}
        </ul>

        <FofflineContainer currentUser={currentUser} />
          <div className="commentsFormContainer">
            <CommentForm channelId={channel_id} createComment={createComment} screenSize={this.state.smallScreen} title={title} />
          </div>
      </article>

    ); // end return
  } // end render
} // end class


export default CommentsIndex;
