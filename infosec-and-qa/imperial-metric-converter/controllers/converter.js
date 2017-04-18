function converter (){
    const galToL = 3.78541;
    const lbsToKg = 0.45359237;
    const miToKm = 1.60934;
    
    this.processInput = (input) => {
        const value = Number(input.replace(/\D/g,''));
        const type = input.match(/\D/g).join('');

        if(typeof value === 'number' && value > 0 && typeof type === 'string'){
            return {value: value, type: type};
        }else{
            return {error: 'Invalid input format'}
        }
    }
}

module.exports = converter;