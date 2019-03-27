import React from 'react';
import { Link } from 'react-router-dom';

const ServerIndexItem = ({ server }) => (
  <li className="server-index-item">
    <Link to={`/servers/${server.id}`}>
      <span>{server.id}</span>
      <img className="discord-server-icon" src={server.image_url} alt={server.title} />
    </Link>
  </li>
);

export default ServerIndexItem;
