import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {change_display_value, clear} from '../actions/indexAction';

 class Button extends Component{
    render(){
        const {label, domain} = this.props;
        let change_display;
        switch(domain){
            case 'number':
                change_display = () => this.props.change_display_value(label);
                break;
            case 'clear':
                change_display = () => this.props.clear_display();
                break;
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
     change_display_value: bindActionCreators(change_display_value, dispatch),
     clear_display: bindActionCreators(clear, dispatch)
   })
)(Button);