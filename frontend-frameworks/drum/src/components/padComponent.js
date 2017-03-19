import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './buttonComponent';
import audioFiles from './audioFiles';

class Pad extends Component{
    componentDidMount(){
     window.addEventListener("keydown", (event) => {
        const id = "button_"+String.fromCharCode(event.keyCode.toString());
        const button = document.getElementById(id);
        button.click();        
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
    })
)(Pad);