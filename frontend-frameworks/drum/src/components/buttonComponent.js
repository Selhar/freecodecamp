import React, {Component} from 'react';

export default class Button extends Component {
  render() {
      const {name, audio} = this.props;
      const play = () => {
        const audio = document.getElementById(name);
        audio.play();
      }
    return (
      <div className="button" onClick={play}>
        <audio src={audio.url} id={name}/>
        <p>{name}</p>
      </div>
    );
  }
}
