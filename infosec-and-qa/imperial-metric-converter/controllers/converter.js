function converter (){
    const galToL = 3.78541;
    const lbsToKg = 0.45359237;
    const miToKm = 1.60934;
    const error = {input_format_error: 'Invalid input format'};
    const conversion_types = ['mi', 'km', 'lbs', 'kg','l', 'gal'];

    this.validateInput = (input) => {
        
        if(typeof input !== 'string')
            return false;
        
        let value = input.match(/\d+/g);
        let type = input.match(/[a-zA-Z]/g);
        
        if(!value || !type)
            return false;
        
        value = Number(value);
        type = type.join('');

        if(value <= 0 || conversion_types.indexOf(type) < 0)
            return false;

        return true;
        
    }

    this.processInput = (input) => {

    }

}

module.exports = converter;