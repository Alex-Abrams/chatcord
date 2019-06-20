import React from 'react';
import { findChannelTitle } from '../../reducers/selectors';

class MessageBoard extends React.PureComponent {
  constructor(props) {
    super(props);
  } // end constructor


  componentDidMount() {
    this.props.requestMessageBoard(this.props.channelId);
  }


  render() {
    const { channelId, title } = this.props;

    console.log(this.props);

    return (
        <div class="messageBoard">
          <header class="messageBoard-header">{channelId}</header>
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
