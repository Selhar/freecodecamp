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
    }).then((response) => {
      response.json().then((result) => {
        that.setState({
          [param]: result
        })
      })
    }).catch((err) => console.error(err));
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

   let results = this.buildRows();

    return (
      <div className="board"> 
        <header className="table-title">Freecodecamp brownie leaderboard </header> 
        <table  className="table-fill"> 
          <tr>
            <th>#</th>
            <th>Nickname</th>
            <th>Last 30 days</th>
            <th>Lifetime</th>
          </tr> 
          {results.recent}
        </table> 
    </div>
    )
  }
  
  buildRows() {
    let result = { 
      recent: [],
      alltime: [] 
    };

    result.recent = this.props.recent.map((data, index) => {
      return (
        <LeaderboardRow index={index+1} username={data.username} recent={data.recent}
        alltime={data.alltime}/>
      );
    });

    result.alltime = this.props.alltime.map((data, index) => {
      return (
        <LeaderboardRow index={index+1} username={data.username} recent={data.recent}
        alltime={data.alltime}/>
      );
    });

    return result;
  }
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
    )
  }
}

export default App;