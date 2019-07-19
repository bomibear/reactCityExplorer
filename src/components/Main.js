import React, { Fragment } from "react";
import Map from "./components/Map";
import SearchResults from "./components/SearchResults";

const Main = () => {
  return (
    <Fragment>
      <Map />
      <SearchResults />
    </Fragment>
  );
};

export default Main;
