import React from 'react';
import { Route } from 'react-router-dom';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  } // end constructor

  componentDidMount() {
    this.props.requestAllServers();
  }

  render() {
    const { servers } = this.props;

    const display = servers.map(server => (
      <li key={server.id}>{server.title}</li>
    ));
    return (
      <div>
        <ul>
          { display }
        </ul>
      </div>
    ); // end return
  }// end render
}// end class

export default ServerIndex;
