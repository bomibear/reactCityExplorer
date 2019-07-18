// Should use the geo-location data from youur <SearchForm> to display a Google Map with a pin on your location.

import React, { Fragment } from "react";

const Map = () => {
  return (
    <Fragment>
      <iframe
        title="Map"
        width="425"
        height="350"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="http://placekitten.com/400/400"
      />
    </Fragment>
  );
};

export default Map;
