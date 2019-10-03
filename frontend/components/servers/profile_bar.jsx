import React from 'react';
import { Link } from 'react-router-dom';

const ProfileBar = ({ currentUser, logout }) => {
  const name = currentUser.username;
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1); //could have used CSS for this

  const display = currentUser ? (
    <span className="profileBar">
      <div className="profileBar-name">{capitalizedName}</div>
      <Link to="/servers/logout" className="profileBar-logout">Logout</Link>
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
};

export default ProfileBar;
