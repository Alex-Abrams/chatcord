import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faHeadphones, faGear } from '@fortawesome/free-solid-svg-icons';

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
        <div className="profileBar-nameImageContainer">
          <img className="profileBar-image"
            src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png"></img>

          <div className="profileBar-name">{currentUser.username}</div>
        </div>
          {/*
            <Link to="/servers/logout" className="profileBar-logout">V</Link>
            */}
          <div className="profileBar-icons">
            <FontAwesomeIcon icon={faMicrophone} className="mic-icon" />
            <FontAwesomeIcon icon={faHeadphones} className="headphones-icon" />
            <FontAwesomeIcon icon={faGear} className="cog-icon" />
          </div>
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
