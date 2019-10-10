// this is essentially the home page and is mostly for show

import React from 'react';


class EntryPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
// https://discordapp.com/assets/c486dc65ce2877eeb18e4c39bb49507a.svg
    return(
      <div className="entryPage">
        <div className="entryPage-leftBar">
          <div className="entryPage-buttons">
            <button>Activity</button>
            <button>Library</button>
            <button>Nitro</button>
            <button>Friends</button>
          </div>
          <h2 className="entryPage-dmHeader">direct messages</h2>
        </div>

        <div>
          <img className="entryPage-backGround" src="https://discordapp.com/assets/c486dc65ce2877eeb18e4c39bb49507a.svg"></img>
        </div>
      </div>
    );
  }
}

export default EntryPage;
