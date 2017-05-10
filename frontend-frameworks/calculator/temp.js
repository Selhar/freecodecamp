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
                
                this.change_display = () => this.props.change_display_value(output);
                break;
            case 'clear':
                if(!isDisplayZero)
                    this.change_display = () => this.props.clear();
                break;

            case 'toggle':
                if(!isDisplayZero){
                    output = display_value * -1;
                    this.change_display = () => this.props.change_display_value(output);
                }
                break;
            case 'dot':
                if(display_value.toString().indexOf('.') < 0){
                    output = display_value + '.';
                    this.change_display = () => this.props.change_display_value(output);
                }
                break;
            case 'percent':
                if(!isDisplayZero){
                    output = display_value / 100;
                    this.change_display = () => this.props.change_display_value(output);
                }
                break;
            case 'operation':
                if(!isDisplayZero && label.toString() != '='){
                    this.change_display = () => {
                        this.props.set_operand(display_value);
                        this.props.change_operation(label.toString());
                    }
                }else if(operand && operation && label.toString() == '='){
                    console.log("LUCIFER", label);
                    let evaluation = operations[label](operand, display_value);
                    this.change_display = () => {
                        this.props.change_display_value(evaluation);
                        this.props.set_operand(evaluation);
                    }
                }
                break;
        }