import React from 'react';

const ActivityFeed = ({ currentUser }) => (
    <ul className="activity-feed">
      <li>Activity 1 { currentUser.username }</li>
      <li>Activity 2 { currentUser.username }</li>
      <li>Activity 3 { currentUser.username }</li>
      <li>Activity 4 { currentUser.username }</li>
      <li>Activity 5 { currentUser.username }</li>
    </ul>
);

export default ActivityFeed;
