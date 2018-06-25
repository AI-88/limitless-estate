import React, { PropTypes, Component } from 'react';

import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';

export default class SimpleMapPage extends Component {
  static defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 12
  };

  state = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
  };
  render() {
    const key = 'AIzaSyAzFLuNuk1zRYOPag2-dNnVqw8I-R2qnjE';
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onChildMouseEnter={this.onChildMouseEnter}
        onChildMouseLeave={this.onChildMouseLeave}
        bootstrapURLKeys={{ key }} // set if you need stats etc ...
        center={this.props.centerMap}
        zoom={this.props.zoomLevel}
      >
        <MyGreatPlace
          renderMapMarker={this.props.renderMapMarker}
          lat={this.props.mapLat}
          lng={this.props.mapLng}
        />
      </GoogleMapReact>
    );
  }
}
