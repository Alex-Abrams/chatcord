import React from 'react';
// import black_logo from '../images/chatcord-black.png';
import {OFFLINE_IMAGES} from './offline_images';

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
          <span id="online-count">ONLINE - 22</span>
          {offlineList.map((el, i) =>
            <div className="offline-icons-and-names">
              <img src={OFFLINE_IMAGES[i]} id="friends-icon" key={i + 700}></img>
              <li className="offline-li-names" key={i}>{el}</li>
            </div>
          )}
        </ul>
      </aside>
    );
  }
}

export default FofflineList;
