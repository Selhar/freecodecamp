import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {change_display_value, change_operation, set_operand, clear} from '../actions/indexAction';

 class Button extends Component{
    render(){
        let {label, domain, display_value, operation, operand} = this.props;
        let change_display;
        let output;
        let isDisplayZero = display_value == 0 ? true : false;
        let current_operation = operation;
        let hasOperand = false;
        const operations = {
            '−': (operator, operand) => Number(operator) - Number(operand),
            'X': (operator, operand) => Number(operator) * Number(operand),
            '÷': (operator, operand) => Number(operator) / Number(operand),
            '+': (operator, operand) => Number(operator) + Number(operand)
        }

        switch(domain){
            case 'number':
                if (!isDisplayZero && !hasOperand) {
                    output = "" + display_value + label;
                }else{
                    output = label;
                    hasOperand = false;
                }
                change_display = () => this.props.change_display_value(output);
                break;
            case 'clear':
                if(!isDisplayZero)
                    change_display = () => this.props.clear();
                break;

            case 'toggle':
                if(!isDisplayZero){
                    output = display_value * -1;
                    change_display = () => this.props.change_display_value(output);
                }
                break;
            case 'dot':
                if(display_value.toString().indexOf('.') < 0){
                    output = display_value + '.';
                    change_display = () => this.props.change_display_value(output);
                }
                break;
            case 'percent':
                if(!isDisplayZero){
                    output = display_value / 100;
                    change_display = () => this.props.change_display_value(output);
                }
                break;
            case 'operation':
                if(current_operation){
                    change_display = () => {
                        let operator = display_value;
                        this.props.change_display_value(operations[label](operand, operator));
                    }
                }
                else if(!isDisplayZero){
                    output = label.toString();
                    change_display = () => {
                        this.props.set_operand(display_value);
                        this.props.change_operation(output);
                        hasOperand = true;
                    }
                }
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
       display_value: state.display_value,
       operation: state.operation, 
       operand: state.operand
   }),
   dispatch => ({
        change_display_value: bindActionCreators(change_display_value, dispatch),
        change_operation: bindActionCreators(change_operation, dispatch),
        set_operand: bindActionCreators(set_operand, dispatch),
        clear: bindActionCreators(clear, dispatch)
   })
)(Button);