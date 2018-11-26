import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      hair: '',
      gender: ''
    }
  }
  componentDidMount(){
    Axios.get("https://swapi.co/api/people/1")
      .then(result =>
      // console.log(result.data)
      this.setState ({
        name: result.data.name,
        hair: result.data.hair_color,
        gender: result.data.gender 
      })
    )}
  render() {
    return (      
      <div className="App">
       <h1>Hello</h1>
       <h2>Name: {this.state.name}</h2>
       <h2>Hair: {this.state.hair}</h2>
       <h2>Gender: {this.state.gender}</h2>
      </div>
    );
  }
}

export default App;
