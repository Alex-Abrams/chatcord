// this is essentially the home page and is mostly for show

import React from 'react';
// import ProfileBar from './profile_bar';
import ProfileBarContainer from './profile_bar_container';

class DirectMessages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="entryPage">
        <div className="entryPage-leftBar">
          <div className="entryPage-buttons">
            <hr id="entry-page-left-line"></hr>
            <button>Friends</button>
            <button>Nitro</button>
            <button id="dm-button">direct messages</button>
          </div>

        </div>

        <div className="entryPage-backGround">
          <div className="entry-page-top-buttons">
            <button>Friends</button>
            <button>Online</button>
            <button>All</button>
            <button>Pending</button>
            <button>Blocked</button>
            <button>Add Friend</button>
          </div>
          <hr id="entry-page-right-line"></hr>
        </div>

        <vr id="ep-vertical-right-line"></vr>

        <div className="activity">
          <p id="activity-a">Active Now</p>
          <div className="activity-inner">
            <p id="activity-p">It's quiet for now...</p>
            <p id="activity-z">When a friend starts an activity-like playing a game or</p>
            <p id="activity-z">hanging out on voice-we'll show it here!</p>
          </div>
        </div>

        <div>
          <ProfileBarContainer />
        </div>

      </div>
    );
  }
}

export default DirectMessages;
