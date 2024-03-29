import React from 'react';
// import { useHistory } from "react-router-dom";

class WelcomeComments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smallScreen: false,
    };

    this.goHome = this.goHome.bind(this);
  }


  componentDidMount() {
    if (window.innerWidth < 1950) {
      this.setState({ smallScreen: !this.state.smallScreen });
    };

  }

  componentDidUpdate(prevprops) {
    if (typeof this.props.channels[0] !== typeof prevprops.channels[0]) {
      this.props.history.push(`/servers/${this.props.serverId}/channels/${this.props.channels[0].id}`)

    }
  }

  goHome() {
    // const history = useHistory();
    return(
      <button onClick={() => this.props.history.push('/servers')}>servers</button>
    );
  }

  render() {

    const smallScreen = (this.state.smallScreen) ? 'defaultSmall' : 'default';
    return(
      <div className={smallScreen}>
        <div className="default-content">
          <header>Welcome!</header>
          <p>If you are using the default login guest@guest.com, username: guest, password:password
            then you are the admin for each server and may create new channels and any server as well as delete any server. Enjoy!</p>
        </div>
      </div>
    );
  }
}

export default WelcomeComments;
