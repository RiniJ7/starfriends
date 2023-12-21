import React, { Component} from 'react';
import './App.css';
const axios = require('axios');
//Declaring class component
class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state or perform other setup tasks
     // initial state values : empty array of people
    this.state = {
      people:[],
    };

    // Bind event handler methods
    // this.handleClick = this.handleClick.bind(this);
  }

  getPeople(){
    return axios.get("https://swapi.dev/api/people")
    .then((response) => {
      console.log(response.data.results);
    })
  }
  // Event handler method
  handleClick() {
    // Do something when the button is clicked
  }

  render() {

  return (
    <div className="App">
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    </div>
  );
}
}

export default App;
