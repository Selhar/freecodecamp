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
  constructor(props) {
    super();

    this.state = {
      order: "recent"
    }
    this.onClick = this.onClick.bind(this);
  }
  render() { 

   let results = this.buildRows();

    return (
      <div className="board"> 
        <header className="table-title">Freecodecamp brownie leaderboard </header> 
        <table  className="table-fill"> 
          <tbody>
            <tr>
              <th>#</th>
              <th>Nickname</th>
              <th onClick={this.onClick} className="indexed" id="recent">Last 30 days</th>
              <th onClick={this.onClick} className="idle" id="alltime">Lifetime</th>
            </tr> 
          </tbody>
          {results[this.state.order]}
        </table> 
    </div>
    )
  }

  onClick(event) {
    
    let id = event.target.id;
    document.getElementById(id).className = "idle";

    if(this.state.order === "recent"){
      this.setState({ order: "alltime"});
      document.getElementById("recent").className = "idle";
      document.getElementById("alltime").className = "indexed";
    }else{
      this.setState({ order: "recent"});
      document.getElementById("recent").className = "indexed";
      document.getElementById("alltime").className = "idle";
    }    
  }
  
  buildRows() {
    let result = { 
      recent: [],
      alltime: [] 
    };

    result.recent = this.props.recent.map((data, index) => {
      return (
        <LeaderboardRow index={index+1} username={data.username} recent={data.recent}
        alltime={data.alltime} key={index}/>
      );
    });

    result.alltime = this.props.alltime.map((data, index) => {
      return (
        <LeaderboardRow index={index+1} username={data.username} recent={data.recent}
        alltime={data.alltime} key={index+100}/>
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