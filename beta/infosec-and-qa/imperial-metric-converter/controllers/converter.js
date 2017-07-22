
exports.conversion_values = {
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
    string: "kilogram(s)"
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
exports.error = { invalid_number: 'Invalid number', invalid_unit: "Invalid unit", invalid_input: "Invalid number and unit" };
exports.conversion_types = ['mi', 'km', 'lbs', 'kg', 'l', 'gal'];
  

exports.isInputValid = (input) => {
    if (typeof input !== 'string')
      return this.error.invalid_input;

    let value = input.match(/-?\d+\.?\d?/g);
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

exports.processInput = (input) => {
  let isInputValid = this.isInputValid(input);
  if (!isInputValid)
    return isInputValid;
      
  let value = Number(input.match(/-?\d+\.?\d?/g));
  let type = input.match(/[a-zA-Z]/g).join('');

  return {value: value, type: type};
}

exports.convert = (request, response) => {
  let input = request.params.data || request.query.data;
  const processed_input = this.processInput(input);
  const conversion_object = this.conversion_values[processed_input.type];
  const initial_value = processed_input.value;
  const final_value = initial_value * conversion_object.ratio;
  const initial_type = processed_input.type;
  const final_type = conversion_object.to
  const final_string = this.conversion_values[final_type].string;

  const output = {
    initNum: initial_value.toString(),
    initUnit: initial_type,
    returnNum: final_value,
    returnUnit: final_type,
    string: initial_value + " " + conversion_object.string 
                  + " converts to " + final_value
                  + " " + final_string
  }

  return response.json(output);
}