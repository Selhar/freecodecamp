import React, {Component} from 'react';
import {connect} from 'react-redux';

class Controls extends Component{
    render(){
        return(
        <div className="controls">
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