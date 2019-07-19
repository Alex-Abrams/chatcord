import React from 'react';

class FofflineList extends React.Component {


  render() {
    const { currentUser, offlineList } = this.props;

    const display = (
      offlineList.forEach((el, i) => {
        <li key={i}>{el}</li>
      })
    );

    return(
      <aside className="aside aside-offline">
        <ul>
          {offlineList.map(el =>
          <li>{el}</li>)}
        </ul>
      </aside>
    );
  }
}

export default FofflineList;
