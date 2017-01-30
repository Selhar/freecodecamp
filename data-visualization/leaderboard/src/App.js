import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      recent: {},
      alltime: {}
    }
  }

  fetch_points(param) {
    let that = this;

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/' + param, {
        method: 'get'
      }).then(function (response) {
      response.json().then(function (result) {
          that.setState({            
            [param]: result
          })
        })
    }).catch(function (err) {
        console.error(err);
      });
  }

  componentDidMount() {
    this.fetch_points('recent');
    this.fetch_points('alltime');
  }

  render() {
    return ( 
      <Leaderboard recent={this.state.recent} 
        alltime={this.state.alltime}/>)
  }
}

class Leaderboard extends Component {
  render() { 
    return (
      <div className="board"> 
        <header>Freecodecamp brownie leaderboard </header> 
        <table> 
          <tr>
            <th>#</th>
            <th>Nickname</th>
            <th>Last 30 days</th>
            <th>Alltime</th>
          </tr> 
          <tr> 
            <td>{console.log(this.props.alltime[0])}</td> 
            <td>abc</td>
              <td>1000</td > 
              <td>1000</td> 
          </tr>
        </table> 
    </div>
  )}
}
export default App;
