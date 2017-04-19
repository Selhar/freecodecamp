class Converter {
  constructor() {
    this.conversion_values = {
      "gal": {
        to: "l",
        ratio: 3.79,
        string: "gallon(s)"
      },
      "l": {
        to: "gal",
        ratio: 0.26,
        string: "liter(s)"
      },
      "lbs": {
        to: "kg",
        ratio: 0.45,
        string: "pound(s)"
      },
      "kg": {
        to: "lbs",
        ratio: 2.20,
        string: "kilo(s)"
      },
      "mi": {
        to: "km",
        ratio: 1.61,
        string: "mile(s)"
      },
      "km": {
        to: "mi",
        ratio: 0.62,
        string: "kilometer(s)"
      }
    }    
    this.error = { invalid_number: 'Invalid number', invalid_unit: "Invalid unit", invalid_input: "Invalid number and unit" };
    this.conversion_types = ['mi', 'km', 'lbs', 'kg', 'l', 'gal'];
  }

  isInputValid(input) {
    if (typeof input !== 'string')
      return this.error.invalid_input;

    let value = input.match(/-?\d+/g);
    let type = input.match(/[a-zA-Z]/g);

    if (value)
      value = Number(value) > 0 ? Number(value) : null;
    if (type)
      type = this.conversion_types.indexOf(type.join('')) >= 0 ? type.join('') : null;

    if (!value && !type)
      return this.error.invalid_input;
    else if (!value)
      return this.error.invalid_number;
    else if (!type)
      return this.error.invalid_unit;

    return true;

  }

  processInput(input) {
    let isInputValid = this.isInputValid(input);
    if (!isInputValid)
      return isInputValid;
        
    let value = Number(input.match(/-?\d+/g));
    let type = input.match(/[a-zA-Z]/g).join('');

    return {value: value, type: type};
  }

  convert(input){
    const processed_input = processInput(input);
    const conversion_object = this.conversion_values[processed_input.type];
    const value = processed_input.value;
    const type = processed_input.type;

    const output = {
      initNum: value,
      initUnit: type,
      returnNum: value * conversion_object.ratio,
      returnUnit: conversion_object.to,
      string: value + " " + conversion_object.string 
                    + " converts to " + value & conversion_object.ratio 
                    + " " + this.conversion_values[conversion_object.to].string
    }

    return output;
  }

}

module.exports = Converter;