import React from 'react';

class TestModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  } // end cont

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state, serverId)
      .then(data => this.props.history.push(`/servers/${serverId}/channels`));
  }

  render () {

    return (
      <section className="channel-form-modal">
        <form className="channel-form" onSubmit={this.handleSubmit}>
          <label>CHANNEL NAME
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}>
            </input>
          </label>
          <button>Cancel</button>
          <button>Create Channel</button>
        </form>
      </section>
    ); // end return
  }// end render
} // end class
