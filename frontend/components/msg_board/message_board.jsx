import React from 'react';
import { findChannelTitle } from '../../reducers/selectors';

class MessageBoard extends React.PureComponent {
  constructor(props) {
    super(props);
  } // end constructor


  componentDidMount() {

  }


  render() {
    const { channelId, title } = this.props;


    return (
        <div class="messageBoard">
          <header class="messageBoard-header">{title}</header>
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
