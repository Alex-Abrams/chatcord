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
          <div classname="entry-page-top-buttons">
            <button id="ep-top-buttons">Friends</button>
            <button id="ep-top-buttons">Online</button>
            <button id="ep-top-buttons">All</button>
            <button id="ep-top-buttons">Pending</button>
            <button id="ep-top-buttons">Blocked</button>
            <button id="ep-top-buttons">Add Friend</button>
          </div>
          <hr id="entry-page-right-line"></hr>
        </div>

        <vr id="ep-vertical-right-line"></vr>
        
        <div classname="left-activity-bar">
        </div>

        <div>
          <ProfileBarContainer />
        </div>

      </div>
    );
  }
}

export default DirectMessages;
