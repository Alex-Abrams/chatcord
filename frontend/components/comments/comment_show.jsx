import React from 'react';
import { Route, Link } from 'react-router-dom';
import {OFFLINE_IMAGES} from '../foffline/offline_images';

class CommentShow extends React.Component {
  constructor(props){
    super(props);

  } // c



  render() {
    const { comment, currentUserName, screenSize } = this.props;
    const random_image = Math.floor(Math.random() * OFFLINE_IMAGES.length);

    const commentSize = (screenSize) ? 'commentSmall' : 'comment';
    /////////////////////////////

    // 2019-08-30T17:31:30.970Z
    const timeSlice = comment.created_at.slice(0, 10);
    const timeStamp = timeSlice.slice(5, 7) + "/" + timeSlice.slice(8, 10) + "/" + timeSlice.slice(0, 4);

    return(
      <div className={commentSize}>
        <div className="comments-text">

          <div>

              <img src={OFFLINE_IMAGES[random_image]} id="chat-icon"></img>
              <div className="comments-name-time">
              <span className="comment-name">{comment.username}</span>
              <span id="timeStamp">{timeStamp}</span>
            </div>

            <div className="comments-body">
              <div id="comment-line">{comment.body}</div>
            </div>

          </div>

        </div>

      </div>
    ); //r
  } // render
} //class


export default CommentShow;
