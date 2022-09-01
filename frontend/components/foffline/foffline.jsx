import React from 'react';
// import black_logo from '../images/chatcord-black.png';

class FofflineList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const test = "https://cdn.pixabay.com/photo/2022/07/31/07/52/northern-gannets-7355205_960_720.jpg";
    const { currentUser, offlineList } = this.props;

    const hotpink = "hotpink";

    const display = (
      offlineList.forEach((el, i) => {
        <li key={i}>{el}</li>
      })
    );

    return(
      <aside className="aside aside-offline" background="hotpink">
        <div className={this.test}></div>
        <ul className="offline-Names">
          <img src={test} id="friends-icon"></img>
          {offlineList.map((el, i) =>
            <div>
              <li key={i}>{el}</li>
              <li>hello</li>
            </div>
          )}
        </ul>
      </aside>
    );
  }
}

export default FofflineList;
