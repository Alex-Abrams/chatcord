import React from 'react';
import { Link } from 'react-router-dom';

class LinkServer extends React.Component {
  constructor(props) {
    super(props);

    this.copyInput = this.copyInput.bind(this);
    this.backgroundClick = this.backgroundClick.bind(this);
  }

  copyInput() {
    const copyText = document.getElementById("linkInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied" + copyText.value);
  }

  backgroundClick(e) {
    if (e.target.id === "allModalBackground") {
      this.props.history.push("/servers");
    };
  }

  render() {
    const { serverId, serverLink, server } = this.props;

    // needs servertitle as well

    return(
      <div id="allModalBackground" onClick={this.backgroundClick}>
        <div className="linkModal">
          <header className="linkModal-header">INVITE FRIENDS TO {server.title.toUpperCase()}</header>
          <Link to="/servers" className="linkModal-leaveButton">&#215;</Link>
          <p className="linkModal-para">Share this link with others to grant access to your server!</p>
          <div className="linkModal-box">
            <input type="text"
              value={`${serverLink}`}
              id="linkInput"
              className="linkModal-input">
            </input>
            <button className="linkModal-copy" onClick={this.copyInput}>Copy</button>
          </div>
          <div>{serverLink}</div>
        </div>
      </div>
    );
  }
}


export default LinkServer;
