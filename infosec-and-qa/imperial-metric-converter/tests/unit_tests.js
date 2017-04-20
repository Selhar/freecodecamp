const chai = require('chai');
const assert = chai.assert;
let converter = require('../controllers/converter');
converter = new converter();

suite('Unit testing', () => {
  
  suite('Sanitization', () => {
    test('Validate input', (done) => {
      
      for(type of converter.conversion_types){
        let input = '1.5'+type;
        assert.equal(converter.isInputValid(input), true, "Testing against all valid types of input, current input is '"+input+"'");
      }
      assert.equal(converter.isInputValid('gal1'), true, "valid input");
      assert.equal(converter.isInputValid('gal'), converter.error.invalid_number, "no number, input is 'gal'");
      assert.equal(converter.isInputValid('1test'), converter.error.invalid_unit, "invalid unit type, input is '1test'");
      assert.equal(converter.isInputValid('1'), converter.error.invalid_unit, "inexistent unit type, input is '1'");
      assert.equal(converter.isInputValid('-1'), converter.error.invalid_input, "invalid number, inexistent unit type, input is '-1'");
      assert.equal(converter.isInputValid(1), converter.error.invalid_input, "number 1, not a string");
      done();
    });
  });

  suite('Input processing', () => {
    test('Expected data types', (done) => {
      assert.typeOf(converter.processInput('1gal'), 'object');
      assert.typeOf(converter.processInput('5lbs').value, 'number');
      assert.typeOf(converter.processInput('114km').type, 'string');
      done();
    });
    
    test('Expected object values', (done) => {
      assert.deepEqual(converter.processInput('1gal'), {value: 1, type: 'gal'});
      assert.deepEqual(converter.processInput('1lbs'), {value: 1, type: 'lbs'});
      assert.deepEqual(converter.processInput('1mi'),  {value: 1, type: 'mi'});
      assert.deepEqual(converter.processInput('1l'),   {value: 1, type: 'l'});
      assert.deepEqual(converter.processInput('1kg'),  {value: 1, type: 'kg'});
      assert.deepEqual(converter.processInput('1km'),  {value: 1, type: 'km'});
      assert.deepEqual(converter.processInput('1.5gal'), {value: 1.5, type: 'gal'});
      assert.deepEqual(converter.processInput('1.5lbs'), {value: 1.5, type: 'lbs'});
      assert.deepEqual(converter.processInput('1.5mi'),  {value: 1.5, type: 'mi'});
      assert.deepEqual(converter.processInput('1.5l'),   {value: 1.5, type: 'l'});
      assert.deepEqual(converter.processInput('1.5kg'),  {value: 1.5, type: 'kg'});
      assert.deepEqual(converter.processInput('1.5km'),  {value: 1.5, type: 'km'});
      done();
    }); 
  });
  suite('Output processing', () => {
    test('Expected output data', (done) => {
      assert.deepEqual(converter.convert('4gal'), 
      {"initNum":"4","initUnit":"gal","returnNum":15.16,"returnUnit":"l","string":"4 gallon(s) converts to 15.16 liter(s)"});
      
      assert.deepEqual(converter.convert('4.5gal'), 
      {"initNum":"4.5","initUnit":"gal","returnNum":17.55,"returnUnit":"l","string":"4.5 gallon(s) converts to 17.055 liter(s)"});
      
      assert.deepEqual(converter.convert('5km'), 
      {"initNum":"5","initUnit":"km","returnNum":3.1,"returnUnit":"mi","string":"5 kilometer(s) converts to 3.1 mile(s)"});
      
      assert.deepEqual(converter.convert('4.5km'), 
      {"initNum":"4.5","initUnit":"km","returnNum":2.79,"returnUnit":"mi","string":"4.5 kilometer(s) converts to 2.79 mile(s)"});
      
      assert.deepEqual(converter.convert('10mi'), 
      {"initNum":"10","initUnit":"mi","returnNum":16.1,"returnUnit":"km","string":"10 mile(s) converts to 16.1 kilometer(s)"});

      assert.deepEqual(converter.convert('10.5mi'), 
      {"initNum":"10.5","initUnit":"mi","returnNum":16.905,"returnUnit":"km","string":"10.5 mile(s) converts to 16.905 kilometer(s)"});

      assert.deepEqual(converter.convert('105l'), 
      {"initNum":"105","initUnit":"l","returnNum":27.3,"returnUnit":"gal","string":"105 liter(s) converts to 27.3 gallon(s)"});

      assert.deepEqual(converter.convert('105.3l'), 
      {"initNum":"105.3","initUnit":"l","returnNum":27.378,"returnUnit":"gal","string":"105.3 liter(s) converts to 27.378 gallon(s)"});

      assert.deepEqual(converter.convert('10.2kg'), 
      {"initNum":"10.2","initUnit":"kg","returnNum":22.44,"returnUnit":"lbs","string":"10.2 kilogram(s) converts to 22.44 pound(s)"});

      assert.deepEqual(converter.convert('10kg'), 
      {"initNum":"10","initUnit":"kg","returnNum":22,"returnUnit":"lbs","string":"10 kilogram(s) converts to 22 pound(s)"});

      assert.deepEqual(converter.convert('10lbs'), 
      {"initNum":"10","initUnit":"lbs","returnNum":4.5,"returnUnit":"kg","string":"10 pound(s) converts to 4.5 kilogram(s)"});

      assert.deepEqual(converter.convert('10.5lbs'), 
      {"initNum":"10.5","initUnit":"lbs","returnNum":4.7250000000000005,"returnUnit":"kg","string":"10.5 pound(s) converts to 4.7250000000000005 kilogram(s)"});
      
      done();
    });
  });
});