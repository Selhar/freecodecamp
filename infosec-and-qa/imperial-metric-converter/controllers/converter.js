function converter (){
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    this.convert = (input) => {
        if(input == "1lb"){
            return lbsToKg;
        }
    }    
}


module.exports = converter;