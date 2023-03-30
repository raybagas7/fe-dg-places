import { useSelector } from 'react-redux';
import Collapse from 'react-bootstrap/Collapse';
import { GiPositionMarker } from 'react-icons/gi';
import BrowseDetailSVG from './Detail SVG/BrowseDetailSVG';

const AsideDetailContainer = () => {
  const showLocation = useSelector((state) => state.location.showInfoLocation);
  const chosenLocation = useSelector((state) => state.location.chosenLocation);

  return (
    <Collapse in={showLocation} dimension="width">
      {chosenLocation ? (
        <article className="place-info-container">
          <img
            src={chosenLocation.imageUrl}
            alt={chosenLocation.locationName}
          />
          <div className="location-name">
            <div>
              <h2>{chosenLocation.locationName}</h2>
            </div>
          </div>
          <div className="information-wrapper">
            <div
              className="place-about"
              dangerouslySetInnerHTML={{
                __html: chosenLocation.placeInformation,
              }}
            ></div>
            <div className="address-wrapper">
              <div className="address-info">
                <GiPositionMarker className="address-icon" />
                <span>{chosenLocation.address}</span>
              </div>
              <div className="address-info">
                <BrowseDetailSVG fill={'#92d72e'} className="address-icon" />
                <a
                  target="_blank"
                  title="Website"
                  rel="noopener noreferrer"
                  href={chosenLocation.website}
                >
                  {chosenLocation.website}
                </a>
              </div>
            </div>
          </div>
        </article>
      ) : (
        <div className="place-info-container"></div>
      )}
    </Collapse>
  );
};

export default AsideDetailContainer;
