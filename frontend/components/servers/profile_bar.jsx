import React from 'react';
import { Link } from 'react-router-dom';

class ProfileBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const name = currentUser.username;
    const { currentUser, logout} = this.props;
    // console.log('currentUser', currentUser);
    // const capitalizedName = currentUser.username.charAt(0).toUpperCase() + currentUser.username.slice(1); //could have used CSS for this


    const display = currentUser ? (
      <span className="profileBar">
          <img className="profileBar-image"
            src="https://variety.com/wp-content/uploads/2018/05/discord-logo.jpg"></img>

          <div className="profileBar-name">{currentUser.username}56565656</div>
          {/*
            <Link to="/servers/logout" className="profileBar-logout">V</Link>
            */}
          <div className="mic-icon">M</div>
          <div className="headphones-icon">H</div>
          <div className="cog-icon">C</div>
      </span>
    ) : (
      <div>
        <Link className="btn" to="/signup">works</Link>
        <Link className="btn" to="/login">works</Link>
      </div>
    );

  return(
    <div>
      {display}
    </div>
  );
  }
};

export default ProfileBar;
