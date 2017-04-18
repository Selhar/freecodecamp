function converter (){
    const galToL = 3.78541;
    const lbsToKg = 0.45359237;
    const miToKm = 1.60934;
    const error = {error: 'Invalid input format'};

    this.processInput = (input) => {

        let value = input.replace(/\D/g,'');
        let type = input.match(/\D/g);
        
        if(!isNaN(value)){
            value = Number(value);
        }

        if(type === null)
            return error;
        
        if(value > 0){
            type = type.join('');        
            return {value: value, type: type};
        }else{
            return error;
        }
    }
}

module.exports = converter;