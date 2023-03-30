import React from 'react';
import HeaderContainer from './Header Components/HeaderContainer';
import '../../styles/placeinfo.css';
import GoogleMapsComponent from './Map Components/GoogleMapsComponent';
import AsideDetailContainer from '../Detail Place Components/AsideDetailContainer';

const MainContainer = () => {
  // console.log(chosenLocation);
  return (
    <div className="main-content-container">
      <HeaderContainer />
      <main>
        <GoogleMapsComponent />
        <AsideDetailContainer />
      </main>
    </div>
  );
};

export default MainContainer;
