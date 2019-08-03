import React from 'react';
import { Link } from 'react-router-dom';


class Join extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      link: ''
    };
  }


  render() {
    const { links, servers} = this.props;

    handleSubmit(e) {
      e.preventDefault();
      // this is where i neeed to figure out the link server_id
    }
    console.log(this.state.link);

    update(property) {
      return e => this.setState({ [property]: e.target.value });
    }

    return(
      <div className="join">
        <header>JOIN A SERVER</header>
        <p>Enter an Instant invite below to join an existing
          server.  The invite will look something like these:
        </p>
        <p>https:&#47;&#47;chatcord.gg&#47;n93432</p>

      <form className="join-form">
        <input
          className="join-input"
          type="input"
          value={this.state.link}
          onChange={this.update('link')}>
        </input>
        <label>Enter an Instant Invite</label>
        <aside>Back</aside>
        <button>Join</button>
      </form>
      </div>
    );
  }
}

export default Link;
