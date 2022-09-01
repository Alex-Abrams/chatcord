import React from 'react';
// <FontAwesomeIcon icon={faUsers} className="users-icon" />
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faBox, faFilezipper, faSmile, faPoo, faFile } from '@fortawesome/free-solid-svg-icons';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      channel_id: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  } // end constructor

  resetForm() {
    document.getElementById("reset").reset();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({body: ''});
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value, channel_id: this.props.channelId });
  }

  render() {
    const { channelId, title, screenSize } = this.props;

    const commentFormSize = (screenSize) ? 'commentFormSmall' : 'commentForm';

    return(
      <div>
        <form className={commentFormSize} id="reset" onSubmit={this.handleSubmit}>
          <div className="commmentForm-container">
            <input
              className="commentForm-input"
              type="input"
              value={this.state.body}
              placeholder={'Message#' + title}
              onChange={this.update('body')}>
            </input>
            <div className="commentForm-input-icons">
              <FontAwesomeIcon icon={faGift} id="input-icons" />
              <FontAwesomeIcon icon={faBox} id="input-icons" />
              <FontAwesomeIcon icon={faFile} id="input-icons" />
              <FontAwesomeIcon icon={faSmile} id="input-icons" />
            </div>
          </div>

          <button id="comment-Button"type="submit">Submit</button>
        </form>
      </div>
    );
  } //end render
}
export default CommentForm;
