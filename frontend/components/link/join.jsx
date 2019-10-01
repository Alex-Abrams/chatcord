import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Join extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '',
      joinError: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.backgroundClick = this.backgroundClick.bind(this);
  }

// https://chatcord.gg/1zr779
// https://chatcord.gg/2qa533

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.links.includes(this.state.link)) {
      this.setState({ joinError: false });
      console.log(this.state);
      let server_Id = parseInt((this.state.link)[20]);
      this.props.createMembership(this.props.currentUserId, server_Id); // need user_id and server_id
    } else {
      this.setState({ joinError: true });
      this.props.receiveFormErrors({ error: '(The instant invite is invalid or has expired.)'});
    };
    // this is where i neeed to figure out the link server_id
  }

  backgroundClick(e) {
    if (e.target.id === "allModalBackground") {
      this.props.history.push("/servers");
    };
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const { links, servers, createMembership, currentUserId, error } = this.props;

    const errorMessage = this.state.joinError ? (
      <span>{error}</span>
    ) : (
      null
    );

    return(
      <div id="allModalBackground" onClick={this.backgroundClick}>
        <div className="join">
          <header className="join-header2" >JOIN A SERVER</header>
          <div className="join-intro">
            <p>Enter an Instant invite below to join an existing
              server.  The invite will look something like this:
            </p>
            <p id="chatExample">https:&#47;&#47;chatcord.gg&#47;n93432</p>
          </div>

          <form className="join-form" onSubmit={this.handleSubmit}>
            <input
              className="join-input"
              type="input"
              value={this.state.link}
              onChange={this.update('link')}>
            </input>
            <p className="join-label">Enter an Invite</p>
            <p className="join-error">{errorMessage}</p>
            <div className="join-backAndJoin">
              <Link to="/servers/createorjoin" className="join-arrow">&#8592;</Link>
              <Link to="/servers/createorjoin" className="join-back">Back</Link>
              <button className="join-button">Join</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Join);
