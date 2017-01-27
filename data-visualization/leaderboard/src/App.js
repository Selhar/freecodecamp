import React, { Component } from 'react';
import './App.css';

function fetch_points(param) {
  fetch('https://fcctop100.herokuapp.com/api/fccusers/top/'+param, {
    method: 'get' // opcional
  }).then(function(response) {
    response.json().then(function(result){
        return result;
      })
    }).catch(function(err) {
      console.error(err);
    });
}

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
  constructor(props) {
    super();

    this.state = {
      recent_points: fetch_points('recent')
    }
  }

  render(){
    return (
      <div className="board">
        <header>Freecodecamp leaderboard </header>
        <table>
          <tr>
            <th>{fetch_points('recent') != undefined ? this.state.recent_points[4].username : "cu"} </th>
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
