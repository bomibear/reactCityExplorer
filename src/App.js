import "./styles.css";
import React, { Component, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import SearchForm from "./SearchForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      location: {}
    };
  }

  getWeather = e => {
    e.preventDefault();
  };

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
