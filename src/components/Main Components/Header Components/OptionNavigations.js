import React from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { IoMdHelpCircle } from 'react-icons/io';
import { RiSettings5Fill } from 'react-icons/ri';

import { useDispatch } from 'react-redux';
import { locationActions } from '../../store/location.slice';

const OptionNavigations = () => {
  const dispatch = useDispatch();

  const closePlaceInfo = () => {
    dispatch(locationActions.hideInfoLocation());
  };
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <RiSettings5Fill />
        </li>
        <li>
          <IoMdHelpCircle />
        </li>
        <li onClick={closePlaceInfo}>
          <IoCloseCircle />
        </li>
      </ul>
    </nav>
  );
};

export default OptionNavigations;
