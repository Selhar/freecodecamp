function converter (){
    const galToL = 3.78541;
    const lbsToKg = 0.45359237;
    const miToKm = 1.60934;
    
    this.processInput = (input) => {
        const value = Number(input.replace(/\D/g,''));
        const type = input.match(/\D/g).join('');

        return {value: value, type: type};
    }
}

module.exports = converter;