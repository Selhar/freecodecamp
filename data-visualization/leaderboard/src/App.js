import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      recent: [],
      alltime: []
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
  
  buildRows(){
    let index = 0;
    let result = { recent: [], alltime: [] };

    result.recent = this.props.recent.map((data) => {
      index++;
      return (
        <LeaderboardRow index={index} username={data.username} recent={data.recent}
        alltime={data.alltime}/>
      );
    });

    index = 0;
    
    result.alltime = this.props.alltime.map((data) => {
      index++;
      return (
        <LeaderboardRow index={index} username={data.username} recent={data.recent}
        alltime={data.alltime}/>
      );
    });

    return result;
  }

  render() { 
   let results = this.buildRows();

    return (
      <div className="board"> 
        <header>Freecodecamp brownie leaderboard </header> 
        <table> 
          <tr>
            <th>#</th>
            <th>Nickname</th>
            <th>Last 30 days</th>
            <th>Lifetime</th>
          </tr> 
          {results.alltime}
        </table> 
    </div>
  )}
}

class LeaderboardRow extends Component {
  render() {
    return(
      <tr> 
        <td>{this.props.index}</td> 
        <td>{this.props.username}</td>
        <td>{this.props.recent}</td> 
        <td>{this.props.alltime}</td> 
      </tr>
  )}
}

export default App;