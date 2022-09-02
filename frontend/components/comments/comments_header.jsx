import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHashtag, faBellSlash, faThumbtack, faUser, faInbox, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faGift} id="input-icons" />

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

          <div className="commentsHeader-icons-input">
            <FontAwesomeIcon icon={faHashtag} id="header-icons" />
            <FontAwesomeIcon icon={faBellSlash} id="header-icons" />
            <FontAwesomeIcon icon={faThumbtack} id="header-icons" />
            <FontAwesomeIcon icon={faUser} id="header-icons" />
            <input id="header-input-right"
              type="input"
              placeholder={'Search'}></input>
            <FontAwesomeIcon icon={faInbox} id="header-icons" />
            <FontAwesomeIcon icon={faCircleQuestion} id="header-icons" />
          </div>

            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-mag" />

        </header>
      </div>
    );
  }
}

export default CommentsHeader;
