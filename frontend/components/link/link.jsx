import React from 'react';

class Link extends React.Component {
  constructor(props) {
    super(props);

    this.copyInput = this.copyInput.bind(this);
  }

  copyInput() {
    const copyText = document.getElementById("linkInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied" + copyText.value);
  }


  render() {
    const { serverId, serverLink, server } = this.props;

    // needs servertitle as well

    return(
      <div id="allModalBackground">
        <div className="linkModal">
          <header className="linkModal-header">INVITE FRIENDS TO {server.title.toUpperCase()}</header>
          <div className="leaveButton">X</div>
          <p>Share this link with others to grant access to your server!</p>
          <div className="linkmodal-box">
            <input type="text" value={`${serverLink}`} id="linkInput">
            </input>
            <button onClick={this.copyInput}>Copy</button>
          </div>
          <div>{serverLink}</div>
        </div>
      </div>
    );
  }
}


export default Link;
