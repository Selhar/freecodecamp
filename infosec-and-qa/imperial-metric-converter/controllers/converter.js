class Converter {
    constructor(){
        this.galToL = 3.78541;
        this.lbsToKg = 0.45359237;
        this.miToKm = 1.60934;
        this.error = {invalid_number: 'Invalid number', invalid_unit: "Invalid input", invalid_input: "Invalid number and unit"};
        this.conversion_types = ['mi', 'km', 'lbs', 'kg','l', 'gal'];
    }
    isInputValid(input){

        if(typeof input !== 'string')
            return false;

        let value = input.match(/\d+/g);
        let type = input.match(/[a-zA-Z]/g);

        if(!value || !type)
            return false;

        value = Number(value);
        type = type.join('');

        if(value <= 0 || this.conversion_types.indexOf(type) < 0)
            return false;

        return true;

    }

    processInput(input){
        if(!this.isInputValid(input))
            return this.error.input_format_error;
        
    }

}

module.exports = Converter;