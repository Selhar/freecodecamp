import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {set_scale} from '../actions/indexAction';

class Display extends Component{
    constructor(props){
        super(props);

        let {display_scale} = this.props;
    };
    componentDidUpdate(){
        let display_div = document.getElementsByClassName("display")[0];
        let value_div = document.getElementsByClassName("calculator_value")[0];
        let current_scale = display_div.offsetWidth / value_div.offsetWidth;
        if(current_scale < 1){
            this.props.set_scale(current_scale);
        }else if(this.props.display_scale < 1){
            this.props.set_scale(1);
        }
        
    }
    render(){
        const {display_scale} = this.props;
        return(
        <div className="display">
            <div className="calculator_value" style={{ transform: 'scale('+display_scale+','+display_scale+')' }}>
                {this.props.display_value}
            </div>
        </div>
    )}
}

export default connect(
   state => ({
       display_value: state.display_value,
       display_scale: state.display_scale
    }),
   dispatch => ({
        set_scale: bindActionCreators(set_scale, dispatch)
    })
)(Display);