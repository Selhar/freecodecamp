import React, {Component} from 'react';
import {connect} from 'react-redux';

class Controls extends Component{
    render(){
        return(
        <div className="controls">
            <span className="output">{this.props.label}</span>
        </div>
    )}
}

export default connect(
   state => ({
       label: state.label
    }),
   dispatch => ({
    })
)(Controls);