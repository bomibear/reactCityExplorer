// Should contain an <h1> with the title of your application (City Explorer).
// Should contain a <p> with the following text: “Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!”

import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header>
        <h1>City Explorer</h1>
        <p>
          Enter a location below to learn about the weather, events, restaurants,
          movies filmed there, and more!
        </p>
      </header>
    </Fragment>
  );
};

export default Header;
