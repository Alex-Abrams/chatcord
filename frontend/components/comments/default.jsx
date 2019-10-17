import React from 'react';

class WelcomeComments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smallScreen: false,
    };
  }

  componentDidMount() {
    if (window.innerWidth < 1800) {
      this.setState({ smallScreen: !this.state.smallScreen });
    };
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
