import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationButton from './LocationButton';
import LocationDropdown from './LocationDropdown';
import { Coordinates } from '../../../utils/Coordinates';
import { useSelector } from 'react-redux';
const SubMenuContainer = () => {
  const activeBrowseMenu = useSelector(
    (state) => state.location.activeLocationId
  );

  return (
    <div className="sub-menu">
      <div className="dropdown-container">
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Filter by favorite
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="location-menu">
        <div className="location-container">
          {Coordinates.map((location) =>
            location.places.length === 0 ? (
              <div
                className={`location ${
                  activeBrowseMenu === location.id ? 'active-location' : ''
                }`}
                key={location.locationName}
              >
                <LocationButton locationData={location} />
              </div>
            ) : (
              <div
                className={`location ${
                  activeBrowseMenu === location.id ? 'active-location' : ''
                }`}
                key={location.locationName}
              >
                <LocationDropdown locationData={location} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SubMenuContainer;
