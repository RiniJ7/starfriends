import React, { Component } from "react";
import CharInfo from "./CharInfo";
import './App.css';

class List extends Component {
  render() {
    const people = this.props.people;
    return (
      <div className="card-container">
        {people.map((p) => {
          console.log(p);
          return(
          <div key={p.url} className="card">
          <h1 className="char-name">{p.name}</h1>
          <CharInfo charInfo={p} />
        </div>
        )
        })}
        
      </div>
    );
  }
}

export default List;
