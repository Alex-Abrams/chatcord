import React from 'react';
import { Link } from 'react-router-dom';

class CreateJoin extends React.Component {

  render() {

    return(
      <div className="createOrJoin">
        <div className="createOrJoin-content">
          <header className="createOrJoin-header">
            OH, ANOTHER SERVER HUH?
          </header>

          <div className="createOrJoin-create">
            <header>CREATE</header>
            <p>Create a new server and invite your friends. It&#39;s free!</p>
            <Link to="/servers/new" className="createOrJoin-create-createButton">Create a server</Link>
          </div>

          <div className="createOrJoin-join">
            <header>JOIN</header>
            <p>Enter an Instant Invite and join your friend&#39;s server.</p>
            <Link to="/servers/join" className="createOrJoin-join-joinbutton">Join a server</Link>
          </div>
          
        </div>
      </div>
    );
  }
}


export default CreateJoin;
