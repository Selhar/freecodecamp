import React, {Component} from 'react';
import {connect} from 'react-redux';
import updateInput from '../actions/indexAction';
import {bindActionCreators} from 'redux';

class UserInput extends Component{
    render(){
        const {text, updateInput} = this.props;
        return(
            <textarea cols="60" rows="18" value={text} onChange={(event) => updateInput(event.target.value)}></ textarea>
    )}
}

export default connect(
   state => ({
       text: state.text
    }),
   dispatch => ({
       updateInput: bindActionCreators(updateInput, dispatch)
    })
)(UserInput);