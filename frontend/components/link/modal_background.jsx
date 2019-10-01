import React from 'react';

class ModalBackground extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundClick = this.backgroundClick.bind(this);
  }

  backgroundClick() {
    this.props.history.push("/servers");
  }

  render() {

    return(
      <div id="modalBackground" onClick={this.backgroundClick}></div>
    );
  }

}

export default ModalBackground;
