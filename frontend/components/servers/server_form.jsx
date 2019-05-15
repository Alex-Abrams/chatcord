import React from 'react';

import { withRouter, Link } from 'react-router-dom';
import { Redirect } from 'react-router';


class ServerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      image_url: '',
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);   ////////////////
  } // end constructor

  // handleClick() {
  //   this.setState({ redirect: true });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state)
    .then(data => this.props.history.push(`/servers/${data.server.id}`));   //this was server instead of servers.. iono `/servers/${data.server.id}`
    // .then(() => this.setState(() => ({
    //   redirect: true
    // })))
  }


  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render () {
    if (this.state.redirect === true) {
      return <Redirect to='/servers' />
    }


    return(
      <section className="server-detail">
        <form className="server-form" onSubmit={this.handleSubmit}>
          <label>SERVER NAME
            <input
              type="text"
              value={this.state.title}
              placeholder="Enter a server name"
              onChange={this.update('title')}>
            </input>
          </label>
          <br />
          <label>Picture
            <input
              type="text"
              value={this.state.image_url}
              onChange={this.update('image_url')}>
            </input>
          </label>
          <button>Create</button>

        </form>
      </section>
    ); // end return
  } // end render
} // end class

export default ServerForm;    //withRouter
