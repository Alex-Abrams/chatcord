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
    const { channelId } = this.props;

    return(
      <div>
        <form className="commentForm" id="reset" onSubmit={this.handleSubmit}>
          <textArea
            className="commentForm-input"
            type="text"
            value={this.state.body}
            placeholder='Message#'
            onChange={this.update('body')}>
          </textArea>
          <button id="comment-Button"type="submit">Submit</button>
        </form>
      </div>
    );
  } //end render
}
export default CommentForm;
