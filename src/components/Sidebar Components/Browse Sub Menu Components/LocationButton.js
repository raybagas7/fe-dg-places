import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { locationActions } from '../../store/location.slice';

const LocationButton = ({ locationData }) => {
  const dispatch = useDispatch();

  const changeMapHandler = () => {
    dispatch(
      locationActions.showInfoLocation({
        lat: locationData.lat,
        lng: locationData.lng,
        id: locationData.id,
      })
    );
    // console.log(locationData);
    dispatch(locationActions.changeLocation(locationData));
  };

  return (
    <Button variant="dark" onClick={changeMapHandler}>
      {locationData.locationName}
    </Button>
  );
};

export default LocationButton;
