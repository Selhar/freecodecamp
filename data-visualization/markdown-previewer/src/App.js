import React, { Component } from 'react';
import 'bootstrap-css'
import './App.css';

let marked = require('marked');

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      rawText: `
Github markdown previewer
=======
You can type github markdown text in here and get the output instantly.
For Github's markdown full documentation go [here](https://guides.github.com/features/mastering-markdown/).
`
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    this.setState({
      rawText: event.target.value
    });
  }

  markupText(){
    return{
      __html: marked(this.state.rawText)
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <UserInput rawText={this.state.rawText} updateState={this.updateState}/>
        </div>
        <div className="col-md-6">
          <DataOutput output={this.state.rawText} markedText={this.markupText()} />
        </div>
      </div>
    )
  }
}

class UserInput extends React.Component {
  render() {
    return (
      <textarea className="input" cols="60" rows="18" value={this.props.rawText} onChange={this.props.updateState}></ textarea>
    )
  }
}

class DataOutput extends React.Component {
  render() {
    return (
      <div className="output" dangerouslySetInnerHTML={this.props.markedText} />
    )
  }
}

export default App;
