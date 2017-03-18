import React, {Component} from 'react';
import {connect} from 'react-redux';

class Controls extends Component{
    render(){
        return(
        <div className="controls">
            <div className="type">
                <label htmlFor="1"> Heater</label><br/>
                <input id="1" type="radio" name="type"/>
                <label htmlFor="2"> Piano</label><br/>
                <input type="radio" id="2" name="type"/>
            </div>
            <span className="output">output</span>
        </div>
    )}
}

export default connect(
   state => ({
    }),
   dispatch => ({
    })
)(Controls);