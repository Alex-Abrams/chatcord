import React from 'react';

class CommentsHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smallScreen: false,
    };
  }

  componentDidMount() {
    if (window.innerWidth < 1950) {
      this.setState({ smallScreen: !this.state.smallScreen });
    };
  }

  render() {
    const { title } = this.props;
    const smallScreen = (this.state.smallScreen) ? "commentsHeaderSmall" : "commentsHeader";


    return(
      <div className={smallScreen}>
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
