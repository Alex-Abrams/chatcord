import React from 'react';

class MessageBoard extends React.PureComponent {
  constructor(props) {
    super(props);
  } // end constructor


  render() {
    const { title } = this.props;

    return (
        <div class="messageBoard">
          <header>{title}</header>
          <p>REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
          <p>REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
          <p>REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
          <p>REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
          <p>REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
          <p>REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
          <p>REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
          <p>REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
        </div>
    ); //end return
  } // end render
}; //end class

export default MessageBoard;
