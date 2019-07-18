// Should contain all child components and manage the application state.

import "./styles.css";
import React, { Component, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import SearchForm from "./SearchForm";
import superagent from "superagent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      location: {}
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <SearchForm />
        <Main locationSearch={this.state.location} />
      </Fragment>
    );
  }
}

export default App;
