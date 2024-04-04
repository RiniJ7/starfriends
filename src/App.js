import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import './App.css';

// const res = await axios.get("https://swapi.dev/api/people/");
// console.log(res);
// var mani;
// mani="cat";
// console.log ("typeof mani"+typeof mani);


// class ManiT {
// name="";
//   dob="";
//   constructor() {
//     this.name="sdfsdf";
//     this.age=1123;
//   }
// }
// const newMani = new ManiT();
// console.log("typeof Mani T "+newMani.constructor.name);
//Declaring class component

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
    };
this.getPeople = this.getPeople.bind(this);
    // Bind event handler methods
    // this.handleClick = this.handleClick.bind(this);
  }

  getPeople(){
    return axios.get("https://swapi.dev/api/people/")
    .then((response) => {
      console.log(response.data.results);
      this.setState( { people: response.data.results } )
    })
  }

  componentDidMount(){
    this.getPeople()
  }


  render() {
const {people} = this.state;
  return (
    <div className="App">
      <List people={people} />
    </div>
  );
}
}

export default App;
