import React from 'react';
import { Route, Link } from 'react-router-dom';
import ServerIndexItem from './server_index_item';
// can possibly have the loading come here

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  } // end constructor

  componentDidMount() {
    this.props.requestAllServers();
  }

  render() {
    const { servers } = this.props;

    return (
      <div>
        <ul>
          {servers.map(server => <ServerIndexItem key={server.id} server={server} />)}
        </ul>
        <br />
        <Link to="/servers/new">+</Link>
      </div>
    ); // end return
  }// end render
}// end class

export default ServerIndex;
