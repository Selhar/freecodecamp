import React, {Component} from 'react';
import {changeLabel} from '../actions/indexAction';
import {bindActionCreators} from 'redux';
import audioFiles from './audioFiles';
import {connect} from 'react-redux';

class Button extends Component {
    render() {
      const {name, audio} = this.props;
      const play = () => {
        const audio = document.getElementById(name);
        audio.play();
        this.props.label(audioFiles[name].title);
      }
    return (
      <div className="button" onClick={play} id={"button_"+name}>
        <audio src={audio.url} id={name}/>
        <p>{name}</p>
      </div>
    );
  }
}

export default connect(
   state => ({
    }),
   dispatch => ({
     label: bindActionCreators(changeLabel, dispatch)
    })
)(Button);