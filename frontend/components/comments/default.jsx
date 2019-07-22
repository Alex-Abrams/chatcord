import React from 'react';

class WelcomeComments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="main">
        <header>Welcome!</header>
        <p>If you are using the default login guest@guest.com, username: guest, password:password
        then you are the admin for each server and may create new channels and any server as well as delete any server.  Server invites coming soon once
      the critical part of my own original react native app are complete!  Enjoy!</p>
      </div>
    );
  }
}

export default WelcomeComments;
