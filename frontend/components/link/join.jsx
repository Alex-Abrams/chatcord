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

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const { links, servers, createMembership, currentUserId, error } = this.props;

    console.log(this.state);

    const errorMessage = this.state.joinError ? (
      <span>{error}</span>
    ) : (
      null
    );

    return(
      <div className="join">
        <header>JOIN A SERVER</header>
        <p>Enter an Instant invite below to join an existing
          server.  The invite will look something like this:
        </p>
        <p>https:&#47;&#47;chatcord.gg&#47;n93432</p>

      <form className="join-form" onSubmit={this.handleSubmit}>
        <input
          className="join-input"
          type="input"
          value={this.state.link}
          onChange={this.update('link')}>
        </input>
        <p>Enter an Instant Invite</p>
        <p>{errorMessage}</p>
        <aside>Back</aside>
        <button>Join</button>
      </form>
      </div>
    );
  }
}

export default withRouter(Join);
