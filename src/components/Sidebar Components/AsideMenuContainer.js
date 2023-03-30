import React from 'react';
import SubMenuContainer from './Browse Sub Menu Components/SubMenuContainer';
import MainMenuContainer from './Main Menu Components/MainMenuContainer';

const AsideMenuContainer = () => {
  return (
    <>
      <aside className="side-bar">
        <MainMenuContainer />
        <SubMenuContainer />
      </aside>
    </>
  );
};

export default AsideMenuContainer;
