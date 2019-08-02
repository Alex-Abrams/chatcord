import React from 'react';

class Link extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { serverId, serverLink, server } = this.props;
    console.log(serverId);
    console.log(serverLink);
    console.log(server.title);

    // needs servertitle as well

    return(
      <div>
        <header>INVITE FRIENDS TO {server.title.toUpperCase()}</header>
        <div className="leaveButton">X</div>
        <p>Copy this link with others to grant access to your server!</p>
        <div>{serverLink}</div>
      </div>
    );
  }
}


export default Link;
