// Should contain <form> that makes a request to capture the users location and stores that in the application state for other components to use.

import React, { Fragment } from "react";
import superagent from "superagent";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  // https://city-explorer-backend.herokuapp.com
  // https://citylookup4.herokuapp.com/location

  handleClick = e => {
    e.preventDefault();
    superagent.get(`https://city-explorer-backend.herokuapp.com/location?data=${this.location}`).then(response => {
      console.log(response.body);
      this.setState({location : response.body});
    })
  };
  render(){
    return (
      <Fragment>
        <form>
          <input />
          <button onClick={this.handleClick}>Search</button>
        </form>
      </Fragment>
    );
  }
};

export default SearchForm;
