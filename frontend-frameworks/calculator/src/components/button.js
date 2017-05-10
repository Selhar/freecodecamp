import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {change_display_value, change_operation, set_operand, clear} from '../actions/indexAction';

 class Button extends Component{
    constructor(props){
        super(props);

        let {label, domain} = this.props;
        this.label = label;
        this.domain = domain;
        this.change_display.bind(this)
    };

    change_display() {
        let {label, domain, display_value, operation, operand} = this.props;
        let output;
        let isDisplayZero = display_value == 0 ? true : false;
                const operations = {
            '−': (operator, operand) => Number(operator) - Number(operand),
            'X': (operator, operand) => Number(operator) * Number(operand),
            '÷': (operator, operand) => Number(operator) / Number(operand),
            '+': (operator, operand) => Number(operator) + Number(operand)
        }
        switch(domain){
            case 'number':
                if (isDisplayZero) {
                    output = label;
                }else{
                    output = "" + display_value + label;
                }
                
                return this.props.change_display_value(output);
            case 'clear':
                if(!isDisplayZero)
                    return this.props.clear();
                break;

            case 'toggle':
                if(!isDisplayZero){
                    output = display_value * -1;
                    return this.props.change_display_value(output);
                }
                break;
            case 'dot':
                if(display_value.toString().indexOf('.') < 0){
                    output = display_value + '.';
                    return this.props.change_display_value(output);
                }
                break;
            case 'percent':
                if(!isDisplayZero){
                    output = display_value / 100;
                    return this.props.change_display_value(output);
                }
                break;
            case 'operation':
                if(!isDisplayZero && label.toString() != '='){
                    this.props.set_operand(display_value);
                    this.props.change_operation(label.toString());
                }else if(operand && operation && label.toString() == '='){
                    let evaluation = operations[label](operand, display_value);
                    this.props.change_display_value(evaluation);
                    this.props.set_operand(evaluation);
                }
                break;
        }
    }
    render(){
        return(
        <div className="button" onClick={ () => this.change_display()}>
            {this.label}
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