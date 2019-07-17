import React, { Fragment } from "react";
import Darksky from "./Darksky";
import Yelp from "./Yelp";
import Movies from "./Movies";
import Eventbrite from "./Eventbrite";
import Hiking from "./Hiking";

const Result = () => {
  return (
    <Fragment>
      <Darksky />
      <Yelp />
      <Movies />
      <Eventbrite />
      <Hiking />
    </Fragment>
  );
};

export default Result;
