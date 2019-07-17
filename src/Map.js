import React, { Fragment } from "react";

const Map = () => {
  return (
    <Fragment>
      <iframe
        title="Map"
        width="425"
        height="350"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?f=q&
        source=s_q&
        hl=en&
        geocode=&
        q=333+E+34th+St,+New+York,+NY&
        aq=1&
        oq=333&
        sll=37.269174,-119.306607&
        sspn=16.742323,33.815918&
        ie=UTF8&
        hq=&
        hnear=333+E+34th+St,+New+York,+10016&
        t=m&
        z=14&
        ll=40.744403,-73.974467&
        output=embed"
      />
    </Fragment>
  );
};

export default Map;
