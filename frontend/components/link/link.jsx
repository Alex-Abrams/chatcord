import React from 'react';

class Link extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { serverId, serverLink, server } = this.props;
    console.log(serverId);
    console.log(serverLink);
    console.log(server.title);

    // needs servertitle as well

    return(
      <div>tities</div>
    );
  }
}


export default Link;
