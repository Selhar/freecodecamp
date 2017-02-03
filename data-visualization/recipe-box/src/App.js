import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Freecodecamp recipe list</h1>
        </header>
        <Recipe />
      </div>
    );
  }
}

class Recipe extends Component {
  render() {
    return (
      <div className="recipe"> 
        <Ingredient />
        <Ingredient />
      </div>
    );
  }
}

class Ingredient extends Component {
  render() {
    return(
      <div className="ingredient">
      
      </div>
    );
  }
}

export default App;
