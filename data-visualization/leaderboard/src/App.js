import React, {
  Component
} from 'react';
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
  constructor(props) {
    super();

    this.state = {
      data_recent: {},
      data_lifetime: {}
    }
  }

  fetch_points(param) {
    let that = this;
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/' + param, {
      method: 'get' // opcional
    }).then(function(response) {
      response.json().then(function(result) {
        that.setState({
          ["data_" + param]: result
        })
      })
    }).catch(function(err) {
      console.error(err);
    });
  }

  componentDidMount() {
    this.fetch_points('recent');
    this.fetch_points('alltime');
  }

  render() {
    return (
      <div className="board">
        <header>Freecodecamp brownie leaderboard </header>
        <table>
          <tr>
            <th>{console.log(this.state.data_recent)}</th>
            <th>Nickname</th>
            <th>Last 30 days</th>
            <th>Lifetime</th>
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
