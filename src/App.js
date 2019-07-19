// Should contain all child components and manage the application state.

import "./styles.css";
import React, { Component, Fragment } from "react";
import './style.scss';
import Header from "./Header";
import Map from "./Map";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";


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
