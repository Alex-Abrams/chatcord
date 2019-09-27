import React from 'react';
import { Link } from 'react-router-dom';

class CreateJoin extends React.Component {
  constructor(props) {
    super(props);

    this.sendToCreate = this.sendToCreate.bind(this);
    this.sendToJoin = this.sendToJoin.bind(this);
  }

  sendToCreate(e) {
    e.preventDefault();
    this.props.history.push("/servers/new");
  }

  sendToJoin(e) {
    e.preventDefault();
    this.props.history.push("/servers/join");
  }

  // <Link to="/servers/new" className="createOrJoin-createButton">Create a server</Link>
  // <Link to="/servers/join" className="createOrJoin-joinbutton">Join a server</Link>
  render() {

    return(
      <div className="createOrJoin">
        <div className="createOrJoin-content">
          <header className="createOrJoin-header">
            OH, ANOTHER SERVER HUH?
          </header>

          <div className="createOrJoin-create">
            <header className="create-header">CREATE</header>
            <p id="cOrjIntro">Create a new server and invite your friends. It&#39;s free!</p>

            <button id="createJoinButtons" className="createButton" onClick={this.sendToCreate}>Create a server
            </button>
          </div>

          <div className="createOrJoin-join">
            <header className="join-header">JOIN</header>
            <p id="cOrjIntro">Enter an Instant Invite and join your friend&#39;s server.</p>

            <button id="createJoinButtons" className="joinButton" onClick={this.sendToJoin}>Join a server
              </button>

          </div>

        </div>
      </div>
    );
  }
}


export default CreateJoin;
