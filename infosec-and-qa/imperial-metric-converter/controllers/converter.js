class Converter {
    constructor(){
        this.galToL = 3.78541;
        this.lbsToKg = 0.45359237;
        this.miToKm = 1.60934;
        this.error = {invalid_number: 'Invalid number', invalid_unit: "Invalid unit", invalid_input: "Invalid number and unit"};
        this.conversion_types = ['mi', 'km', 'lbs', 'kg','l', 'gal'];
    }
    isInputValid(input){
        if(typeof input !== 'string')
            return this.error.invalid_input;

        let value = input.match(/-?\d+/g);
        let type = input.match(/[a-zA-Z]/g);
        
        if(value)
            value = Number(value) > 0 ? Number(value) : null;
        if(type)
            type = this.conversion_types.indexOf(type.join('')) >= 0 ? type.join('') : null;

        if(!value && !type)
            return this.error.invalid_input;
        else if(!value)
            return this.error.invalid_number;
        else if(!type)
            return this.error.invalid_unit;

        return true;

    }

    processInput(input){
        if(!this.isInputValid(input))
            return this.error.input_format_error;
        
    }

}

module.exports = Converter;