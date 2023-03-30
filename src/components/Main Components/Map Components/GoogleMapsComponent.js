import React from 'react';
import {
  GoogleMap,
  LoadScript,
  OverlayView,
  OverlayViewF,
} from '@react-google-maps/api';
import { Coordinates } from '../../../utils/Coordinates';
import { mapStyles } from './GoogleMapsStyles/mapStyles';
import '../../../styles/maps.css';
import { FaMapMarker } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { locationActions } from '../../store/location.slice';

const containerStyle = {
  width: '100%',
  height: '100%',
};

var myOptions = {
  styles: mapStyles,
};

const locations = Coordinates;

function GoogleMapsComponent() {
  const center = useSelector((state) => state.location.centerMap);
  const zoom = useSelector((state) => state.location.zoomMap);
  const activeBrowseMenu = useSelector(
    (state) => state.location.activeLocationId
  );

  const dispatch = useDispatch();

  const showInfoLocation = (locationData) => {
    dispatch(
      locationActions.showInfoLocation({
        lat: locationData.lat,
        lng: locationData.lng,
        id: locationData.id,
      })
    );
    dispatch(locationActions.changeLocation(locationData));
  };
  return (
    // For best practice i should use the environtment variable for the API key
    // But ill leave it just like that for now
    <LoadScript googleMapsApiKey="AIzaSyCeMGbuQRP9yc4VOYH3f1-oCvi4m85hTJQ">
      <GoogleMap
        options={myOptions}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
        {locations.map((location) => (
          <OverlayViewF
            key={location.locationName}
            position={location}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            {activeBrowseMenu === location.id ? (
              <div
                onClick={() => showInfoLocation(location)}
                className="big-marker-wrapper"
              >
                <div className="big-map-marker">
                  <FaMapMarker className="big-map-marker-icon" />
                </div>
                <div className="big-map-marker-circle"></div>
                <div className="big-location-info">
                  <h3>{location.locationName}</h3>
                  <p>{location.address}</p>
                </div>
              </div>
            ) : (
              <div
                onClick={() => showInfoLocation(location)}
                className="marker-wrapper"
              >
                <div className="map-marker">
                  <FaMapMarker className="map-marker-icon" />
                </div>
                <div className="map-marker-circle"></div>
                <div className="location-info">
                  <p>{location.locationName}</p>
                </div>
              </div>
            )}
          </OverlayViewF>
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMapsComponent);
