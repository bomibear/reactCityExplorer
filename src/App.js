// Should contain all child components and manage the application state.

import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import './scss/core.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      weather: [],
      events: [],
      restaurants: [],
      hikingTrails: []
    };
  }

  searchResults = data => {
    this.setState({location: data});
  }

  render() {
    return (
      <Fragment>
        <Header />
        <SearchForm search={this.searchResults}/>
        <Map locationName = {this.state.location}/>
        <SearchResults
          location = {this.state.location}
        />
      </Fragment>
    );
  }
}

export default App;
