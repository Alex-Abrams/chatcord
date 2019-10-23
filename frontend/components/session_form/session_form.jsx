import React from 'react';

import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    };
    // this'' stuff area
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLink = this.handleLink.bind(this);
  } //end constructor
  // basically for forms always gunna need a handleInput and handleSubmit
  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleLink() {
    this.props.history.push('/servers');
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    let displayForm;
    if (formType === 'login') {
      displayForm = (
        <div className="sessionForm-logSign">
          <h2 className="sessionForm-head">Login</h2>
          <p className="sessionForm-info">Need an account?</p>
          <Link to="/signup" className="register">Register</Link>
        </div>
      );
    } else {
      displayForm = (
        <div className="sessionForm-logSign">
          <h2 className="sessionForm-head">Create an Account</h2>
          <Link to="/login" className="login-link">Already have an account?</Link>
        </div>
      )
    };


    const demoToolTip = (
      <div className="demoToolTip">
        <h3>For demo purposes it is recommended to use guest credentials:</h3>
        <span>Email: guest&#64;guest.com</span>
        <span>Username: guest</span>
        <span>Password: password</span>
      </div>
    );

    // <img className="sessionForm-backGround" src="https:/discordapp.com/assets/fd91131ea693096d6be5e8aa99d18f9e.jpg" alt="">
    return(
      <div>
        <div>
            <img className="sessionForm-backGround" src={window.sessionURL} alt="">
          </img>
        </div>
        <div className="formType">
          { displayForm }
          <form className="sessionForm-form">
            <br />
            {this.renderErrors()}
            <br />
            <label className="session-emailLabel">Email
              <input
                type="text"
                className="session-emailInput"
                value={this.state.email}
                onChange={this.handleInput('email')}>
              </input>
            </label>
            <label className="session-usernameLabel">Username
              <input
                type="text"
                className="session-usernameInput"
                value={this.state.username}
                onChange={this.handleInput('username')}>
              </input>
            </label>
            <label className="session-passwordLabel">Password
              <input
                type="password"
                className="session-passwordInput"
                value={this.state.password}
                onChange={this.handleInput('password')}>
              </input>
            </label>
            <button className="session-submit" onClick={(event) => {this.handleSubmit(event); this.handleLink();}}>Login</button>
            <div>
              { demoToolTip }
            </div>
          </form>
        </div>
      </div>
    );
  };// end return
};// end class
// <Link className="session-submit" to="/servers" onClick={this.handleSubmit}>Login</Link>

export default SessionForm;
