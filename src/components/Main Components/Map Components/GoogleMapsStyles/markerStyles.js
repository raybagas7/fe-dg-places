// import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// class MapWithMarker extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       position: {
//         lat: props.lat,
//         lng: props.lng,
//       },
//     };
//   }

//   componentDidMount() {
//     // Create a new marker and set its position
//     const marker = new google.maps.Marker({
//       position: this.state.position,
//       map: this.props.map,
//     });

//     // Create a custom element for the marker using HTML
//     const icon = document.createElement('div');
//     icon.innerHTML = '<h1>Custom Marker</h1>';

//     // Create an overlay view for the marker and set its content
//     const customMarker = new google.maps.OverlayView();
//     customMarker.draw = function () {
//       this.getPanes().markerLayer.id = 'customMarkerLayer';
//       const div = icon;
//       this.getPanes().markerLayer.appendChild(div);
//     };

//     // Bind the overlay view to the marker and set its position
//     customMarker.setMap(this.props.map);
//     customMarker.setPosition(this.state.position);
//   }

//   render() {
//     const { lat, lng } = this.state.position;

//     return (
//       <GoogleMap
//         defaultZoom={12}
//         defaultCenter={{ lat, lng }}
//         ref={(map) => {
//           this.props.onMapLoad(map);
//         }}
//       >
//         <Marker position={this.state.position} />
//       </GoogleMap>
//     );
//   }
// }

// export default withGoogleMap(MapWithMarker);
