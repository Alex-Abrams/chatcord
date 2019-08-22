import React from 'react';

class CommentsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return(
      <div className="commentsHeader">
        <header className="commentsHeader-header">
          <div className="commentsHeader-hastag">&#35;</div>
          <span className="commentsHeader-title">
            {title}
          </span>
        </header>
      </div>
    );
  }
}

export default CommentsHeader;
