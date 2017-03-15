import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isActive, changeClock} from '../actions/indexAction';
import {bindActionCreators} from 'redux';

class Clock extends Component{
    render(){
        return(
        <div>
            <input type="text" defaultValue="25:00"/>
            <a className="button">RESET</a>
            <a className="button" onClick={this.props.isActive}>START</a> 
        </div>
    )}
}

export default connect(
   state => state,
   dispatch => ({
       changeClock: bindActionCreators(changeClock, dispatch), 
       isActive: bindActionCreators(isActive, dispatch)
    })
)(Clock);