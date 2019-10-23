import React from 'react';

import { withRouter, Link } from 'react-router-dom';
import { Redirect } from 'react-router';


class ServerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      image_url: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backgroundClick = this.backgroundClick.bind(this);
    this.randomPicture = this.randomPicture.bind(this);
  } // end constructor

  randomPicture() {
    let pics = [window.carURL, window.crowURL, window.earthURL, window.heartURL, window.orangeURL, window.tigerURL];
    let randoNum = [Math.floor(Math.random() * 6)];
    return pics[randoNum];
  }


  backgroundClick(e) {
    if (e.target.id === "allModalBackground") {
      this.props.history.push("/servers");
    };
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.image_url.length <= 5) {
      let defaultPic = this.randomPicture();
      this.props.createServer({ title: this.state.title, image_url: defaultPic });

    } else {
      this.props.createServer(this.state);
    };

    // this.props.createServer(this.state);
    this.props.history.push('/servers/');
  }

  render () {


    return(
      <div id="allModalBackground" onClick={this.backgroundClick}>
        <section className="serverForm">
          <div className="serverForm-content">
            <header className="serverForm-header">CREATE YOUR SERVER</header>
            <p id="createYourServerIntro">You may create a server and enter an image url. Image upload coming soon.</p>
            <form className="serverForm-form" onSubmit={this.handleSubmit}>
              <label className="serverForm-label">Server name
                <input
                  className="serverForm-inputName"
                  type="text"
                  value={this.state.title}
                  placeholder="Enter a server name"
                  onChange={this.update('title')}>
                </input>
              </label>
              <br />
              <label className="serverForm-picLabel">Picture url
                <input
                  className="serverForm-inputPic"
                  type="text"
                  value={this.state.image_url}
                  placeholder="Copy Paste Img Url"
                  onChange={this.update('image_url')}>
                </input>
              </label>
              <div className="backAndCreateButton">
                <span className="serverForm-arrow">&#8592;</span>
                <Link className="serverForm-backButton" to="/servers/createorjoin">Back</Link>
                <button className="serverForm-createButton">Create</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    ); // end return
  } // end render
} // end class

export default withRouter(ServerForm);    //withRouter
