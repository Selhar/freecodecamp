import React, {Component} from 'react';
import {connect} from 'react-redux';

class Display extends Component{
    render(){
        return(
        <div className="display">
            {this.props.display_value}
        </div>
    )}
}

export default connect(
   state => ({
       display_value: state.display_value
    }),
   dispatch => ({
    })
)(Display);