// Should use the geo-location data from youur <SearchForm> to display a Google Map with a pin on your location.

import React, { Fragment } from "react";
require('dotenv').config();

class Map extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.locationName.latitude}%2c%20${this.props.locationName.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`;
    return (
      <Fragment>
        <h3>{this.props.locationName.formatted_query}</h3>
        <img src={url}></img>
      </Fragment>
    );
  }
};

export default Map;
