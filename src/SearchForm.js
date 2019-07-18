// Should contain <form> that makes a request to capture the users location and stores that in the application state for other components to use.

import React, { Fragment } from "react";
import superagent from "superagent";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: {}
    };
  }

  handleClick = e => {
    e.preventDefault();
    superagent.get(`https://city-explorer-backend.herokuapp.com/location?data=${this.state.input}`).then(response => {
      this.setState({result: response.body});
    })
  };

  render(){
    return (
      <Fragment>
        <form>
          <input onChange={event => {
            this.setState({input: event.target.value});
            console.log('new input text is ' + this.state.input);
          }}/>
          <button onClick={this.handleClick}>Search</button>
        </form>
      </Fragment>
    );
  }
};

export default SearchForm;
