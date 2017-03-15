import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeClock, tickClock, toggleStatus} from '../actions/indexAction';
import {bindActionCreators} from 'redux';

class Clock extends Component{
    render(){
        const {clock, changeClock, isActive, tickClock, toggleStatus} = this.props;
        return(
        <div>
            <input type="text" value={clock} onChange={changeClock} />
            <a className="button">RESET</a>
            <a className="button" onClick={(event) => {
                toggleStatus(isActive);
                }}
            >START</a> 
        </div>
    )}
}

export default connect(
   state => ({
       clock: state.clock,
       isActive: state.isActive
    }),
   dispatch => ({
       changeClock: bindActionCreators(changeClock, dispatch), 
       toggleStatus: bindActionCreators(toggleStatus, dispatch),
       tickClock: bindActionCreators(tickClock, dispatch)
    })
)(Clock);