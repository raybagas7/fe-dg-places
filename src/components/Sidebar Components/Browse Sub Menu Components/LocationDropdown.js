import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Collapse from 'react-bootstrap/Collapse';
import { useDispatch } from 'react-redux';
import { locationActions } from '../../store/location.slice';

const LocationDropdown = ({ locationData }) => {
  const [open, setOpen] = useState(false);
  const [initialOpen, setInitialOpen] = useState(true);

  const dispatch = useDispatch();

  const openHandler = () => {
    setOpen(!open);
    setInitialOpen(false);

    dispatch(
      locationActions.showInfoLocation({
        lat: locationData.lat,
        lng: locationData.lng,
        id: locationData.id,
      })
    );
    dispatch(locationActions.changeLocation(locationData));
  };

  const openHandlerSecondary = () => {
    setOpen(!open);

    if (!open) {
      dispatch(
        locationActions.showInfoLocation({
          lat: locationData.lat,
          lng: locationData.lng,
          id: locationData.id,
        })
      );
      dispatch(locationActions.changeLocation(locationData));
    }
  };

  return (
    <Dropdown
      autoClose={false}
      {...(initialOpen && { onClick: () => openHandler() })}
    >
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-basic"
        {...(!initialOpen && { onClick: () => openHandlerSecondary() })}
      >
        {locationData.locationName}
      </Dropdown.Toggle>
      <Collapse in={open}>
        <div>
          <Dropdown.Menu variant="dark" onClick={(e) => e.stopPropagation()}>
            {/* I found about this stopPropagation from but not copy any snippet or code from stackoverflow
          https://stackoverflow.com/questions/10554446/no-onclick-when-child-is-clicked */}
            {locationData.places.map((place) => (
              <Dropdown.Item key={place} href={`#/${place}`}>
                {place}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </div>
      </Collapse>
    </Dropdown>
  );
};

export default LocationDropdown;
