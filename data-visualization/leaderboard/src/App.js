import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Leaderboard/>
      </div>
    );
  }
}

class Leaderboard extends Component {
  render(){
    return (
      <div className="board">
        <header>Freecodecamp leaderboard </header>
        <table>
          <tr>
            <th>#</th>
            <th>Camper</th>
            <th>Points for the last month</th>
            <th>Lifetime points</th>
          </tr>
          <tr>
            <td>1</td>
            <td>abc</td>
            <td>1000</td>
            <td>1000</td>
          </tr>
        </table>
      </div>
    )
  }
}



export default App;
