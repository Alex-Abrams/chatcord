import React from 'react';

import { withRouter } from 'react-router-dom';


class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    //handle submit bind
    this.handleSubmit = this.handleSubmit.bind(this);
  } // end constrcu

  update(property) {
    return e =>  this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state, this.props.activeServerId) // second argument is all wrong
      .then(data => this.props.history.push(`/servers/${this.props.activeServerId}/channels`));
      // console.log(this.props.activeServerId);
  }

  render() {

    return(
      <section className="channel-form-detail">
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

    );// end return

  } //end render
} //end class
export default withRouter(ChannelForm);
