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
        <div>
          <h2>Login</h2>
          <p>Need an account?</p>
          <Link to="/signup" className="signout-button">Sign up</Link>
        </div>
      );
    } else {
      displayForm = (
        <div>
          <h2>Sign up</h2>
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      )
    };

    return(
      <div className="formType">
        { displayForm }
        <form>
          <br />
          {this.renderErrors()}
          <br />
          <label>Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}>
            </input>
          </label>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}>
            </input>
          </label>
          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}>
            </input>
          </label>
            <Link to="/servers" onClick={this.handleSubmit}>Login</Link>
        </form>
      </div>
    );
  };// end return
};// end class

export default SessionForm;
