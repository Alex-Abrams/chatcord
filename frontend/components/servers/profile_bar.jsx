import React from 'react';
import { Link } from 'react-router-dom';

const ProfileBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>{currentUser.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
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
