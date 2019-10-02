import React from 'react';

import { withRouter, Link } from 'react-router-dom';


class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    //handle submit bind
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backgroundClick = this.backgroundClick.bind(this);
  } // end constrcu

  update(property) {
    return e =>  this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let serverId = parseInt(this.props.match.params.serverId);
    this.props.createChannel(this.state, serverId);

    this.props.history.push(`/servers/${serverId}/channels`);
  }

  backgroundClick(e) {
    let serverId = parseInt(this.props.match.params.serverId);
    
    if (e.target.id === "allModalBackground") {
      this.props.history.push(`/servers/${serverId}/channels`);
    };
  }


  render() {
    const {serverId} = this.props;

    return(
      <div id="allModalBackground" onClick={this.backgroundClick}>
        <section class="modal" id="channelModal">
          <div class="modal-content">
            <form onSubmit={this.handleSubmit}>
              <span id="modalLabel">CHANNEL NAME</span>
              <input
                class="modal-input"
                type="text"
                value={this.state.title}
                onChange={this.update('title')}>
              </input>
              <div class="modal-buttons">
                <Link class="modal-cancel" to={`servers/${serverId}/channels`} id="cancel" onClick={this.handleClick}>Cancel</Link>
                <button class="modal-create" id="create">Create Channel</button>
              </div>
            </form>
          </div>
        </section>
      </div>

    );// end return

  } //end render
} //end class
export default withRouter(ChannelForm);
