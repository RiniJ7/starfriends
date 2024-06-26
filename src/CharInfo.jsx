import React, { Component } from "react";
import './App.css';

class CharInfo extends Component {
    constructor(props){
        super(props);
//this is the state of the component
        this.state = {
            expanded: false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({ expanded : !this.state.expanded })
    }

    close() {
        this.setState({ expanded : !this.state.expanded })
    }

    render() {
        //this is the component related to props
        const info = this.props.charInfo;
        if(!this.state.expanded){
            return <p className="btn btn-info" onClick={this.open}>Show Info</p>
        }
return(
    <div className="user-details">
        <p className="btn btn-danger" onClick={this.close}>Hide Info</p>
        <ul>
            <li><h2>Gender: {info.gender}</h2></li>
            <li><h2>Birth date: {info.birth_year}</h2></li>
            <li><h2>Hair Color: {info.hair_color}</h2></li>
        </ul>
    </div>
)
}
}
export default CharInfo