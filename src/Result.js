// Should contain a container with the data from your API call. This should be nested within a <SearchResults> parent component and each <Result> component should be individually created and named. Essentially, this means that you should have a component for each API. For example: <Yelp>, <MovieDB>, <DarkSky>, <EventBrite>, etc. Each one of these components should then render a <ul> with the data from that API

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
