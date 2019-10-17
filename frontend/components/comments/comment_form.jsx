import React from 'react';
// import { withRouter, Link } from 'react-router-dom';


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
          <input
            className="commentForm-input"
            type="input"
            value={this.state.body}
            placeholder={'Message#' + title}
            onChange={this.update('body')}>
          </input>
          <button id="comment-Button"type="submit">Submit</button>
        </form>
      </div>
    );
  } //end render
}
export default CommentForm;
