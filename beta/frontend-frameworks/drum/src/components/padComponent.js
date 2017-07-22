import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './buttonComponent';
import audioFiles from './audioFiles';
import {changeLabel} from '../actions/indexAction';
import {bindActionCreators} from 'redux';

class Pad extends Component{
    componentDidMount(){
     window.addEventListener("keydown", (event) => {
        const key = String.fromCharCode(event.keyCode.toString());
        const id = "button_"+key;
        const button = document.getElementById(id);
        if(button != undefined){
            button.click();        
            this.props.label(audioFiles[key].title);
        }
    });
  }
    render(){
        return(
        <div className="pad">
          <Button audio={audioFiles.Q} name="Q"/>
          <Button audio={audioFiles.W} name="W"/>
          <Button audio={audioFiles.E} name="E"/>
          <Button audio={audioFiles.A} name="A"/>
          <Button audio={audioFiles.S} name="S"/>
          <Button audio={audioFiles.D} name="D"/>
          <Button audio={audioFiles.Z} name="Z"/>
          <Button audio={audioFiles.X} name="X"/>
          <Button audio={audioFiles.C} name="C"/>
        </div>
    )}
}

export default connect(
   state => ({
    }),
   dispatch => ({
     label: bindActionCreators(changeLabel, dispatch)
    })
)(Pad);