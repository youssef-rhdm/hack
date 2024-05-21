
import React from 'react';
import CardBox from './CardBox';
import Details from './Details';

const Main = () => {
  return (
    <div className="main">
      <div className="topbar">
        <div className="toggle">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className="search">
          <label>
            <input type="text" placeholder="Search here" />
            <ion-icon name="search-outline"></ion-icon>
          </label>
        </div>
        <div className="user">
          <img src="assets/imgs/customer01.jpg" alt="" />
        </div>
      </div>
      <CardBox />
      <Details />
    </div>
  );
};

export default Main;
