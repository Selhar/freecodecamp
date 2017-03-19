import React, {Component} from 'react';

export default class Button extends Component {
  play(event) {
        const audio = event.target.children[1];
        console.log(audio);
        audio.play();
      }
  render() {
      const {name, audio} = this.props;
    return (
      <div className="button" onClick={this.play}>
        <p>{name}</p>
        <audio src={audio.url}/>
      </div>
    );
  }
}
