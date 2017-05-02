import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeClock, toggleStatus} from '../actions/indexAction';
import {bindActionCreators} from 'redux';
import {defaultState} from '../reducers/indexReducer';

class Clock extends Component{
    render(){
        const {clock, changeClock, isActive, toggleStatus} = this.props;
        const buttonTitle = isActive ? "PAUSE" : "START";
        return(
        <div>
            <input type="text" value={clock} onChange={changeClock} />
            <a className="button" onClick={() => changeClock(defaultState.clock)}>RESET</a>
            <a className="button" onClick={(event) => {
                toggleStatus(isActive);
                }}
            >{buttonTitle}</a> 
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
       toggleStatus: bindActionCreators(toggleStatus, dispatch)
    })
)(Clock);