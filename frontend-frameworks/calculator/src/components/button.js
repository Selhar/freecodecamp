import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {change_display_value} from '../actions/indexAction';

 class Button extends Component{
    render(){
        const {label} = this.props;
        const change_display = () => {
            this.props.change_display_value(label);
        }

        return(
        <div className="button" onClick={change_display}>
            {label}
        </div>
    )}
}

export default connect(
   state => ({
   }),
   dispatch => ({
     change_display_value: bindActionCreators(change_display_value, dispatch)
   })
)(Button);