import React from 'react';
import { Link } from 'react-router-dom';

class LogoutPopup extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundClick = this.backgroundClick.bind(this);
  }

  backgroundClick(e) {
    if (e.target.id === "allModalBackground") {
      this.props.history.push("/servers");
    };
  }

  render() {

    const { logout } = this.props;

    return(
      <div id="allModalBackground" onClick={this.backgroundClick}>
        <div className="logoutPopup">
          <header className="logoutPopup-header">log out</header>
          <p className="logoutPopup-info">Are you sure you want to logout?</p>
          <div className="logoutPopup-buttons">
            <Link to="/servers" className="logoutPopup-cancel">Cancel</Link>
            <button onClick={logout} className="logoutPopup-logout">Log Out</button>
          </div>
        </div>
      </div>

    );
  }
}

export default LogoutPopup;
