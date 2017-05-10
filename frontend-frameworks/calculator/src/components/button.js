import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {change_display_value, clear} from '../actions/indexAction';

 class Button extends Component{
    render(){
        let {label, domain, display_value} = this.props;
        let change_display;
        let output;

        switch(domain){
            case 'number':

                if (display_value != 0) {
                    output = "" + label + display_value;
                }else{
                    output = label;
                }

                change_display = () => this.props.change_display_value(output);
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
       display_value: state.display_value
   }),
   dispatch => ({
     change_display_value: bindActionCreators(change_display_value, dispatch),
     clear_display: bindActionCreators(clear, dispatch)
   })
)(Button);