import React from 'react';
import { Link } from 'react-router-dom';
import ActivityFeed from './activity_feed';

const Greeting = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Logout</button>
      <ActivityFeed currentUser={currentUser}/>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return(
    <div>
      {display}
    </div>
  );
};

export default Greeting;
