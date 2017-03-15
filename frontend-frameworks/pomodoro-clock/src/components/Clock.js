import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isActive, changeClock} from '../actions/indexAction';
import {bindActionCreators} from 'redux';

class Clock extends Component{
    render(){
        const {clock, changeClock, isActive} = this.props;
        return(
        <div>
            <input type="text" value={clock} onChange={changeClock}/>
            <a className="button">RESET</a>
            <a className="button" onClick={isActive}>START</a> 
        </div>
    )}
}

export default connect(
   state => ({clock: state.clock}),
   dispatch => ({
       changeClock: bindActionCreators(changeClock, dispatch), 
       isActive: bindActionCreators(isActive, dispatch)
    })
)(Clock);