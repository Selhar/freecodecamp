const chai = require('chai');
const assert = chai.assert;
let converter = require('../controllers/converter');
converter = new converter();

suite('Unit testing', () => {
  
  suite('Sanitization', () => {
    test('Validate input', (done) => {
      
      for(type of converter.conversion_types){
        let input = '1'+type;
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
      done();
    }); 
  });
  suite('Output processing', () => {
    test('Expected output data', (done) => {
      assert.deepEqual(converter.convert('4gal'), 
      {"initNum":"4","initUnit":"gal","returnNum":15.14164,"returnUnit":"l","string":"4 gallons converts to 15.14164 liters"});
      
      assert.deepEqual(converter.convert('4.5gal'), 
      {"initNum":"4.5","initUnit":"gal","returnNum":17.034345000000002,"returnUnit":"l","string":"4.5 gallons converts to 17.03435 liters"});
      
      assert.deepEqual(converter.convert('5km'), 
      {"initNum":"5","initUnit":"km","returnNum":3.106863683249034,"returnUnit":"mi","string":"5 kilometers converts to 3.10686 miles"});
      
      assert.deepEqual(converter.convert('4.5km'), 
      {"initNum":"4.5","initUnit":"km","returnNum":2.7961773149241305,"returnUnit":"mi","string":"4.5 kilometers converts to 2.79618 miles"});
      
      assert.deepEqual(converter.convert('10mi'), 
      {"initNum":"10","initUnit":"mi","returnNum":16.0934,"returnUnit":"km","string":"10 miles converts to 16.0934 kilometers"});

      assert.deepEqual(converter.convert('10.5mi'), 
      {"initNum":"10.5","initUnit":"mi","returnNum":16.89807,"returnUnit":"km","string":"10.5 miles converts to 16.89807 kilometers"});

      assert.deepEqual(converter.convert('105li'), 
      {"initNum":"105","initUnit":"l","returnNum":27.738078570088838,"returnUnit":"gal","string":"105 liters converts to 27.73808 gallons"});

      assert.deepEqual(converter.convert('105.3li'), 
      {"initNum":"105.3","initUnit":"l","returnNum":27.817330223146236,"returnUnit":"gal","string":"105.3 liters converts to 27.81733 gallons"});

      assert.deepEqual(converter.convert('10.2kg'), 
      {"initNum":"10.2","initUnit":"kg","returnNum":22.48716908587453,"returnUnit":"lbs","string":"10.2 kilograms converts to 22.48717 pounds"});

      assert.deepEqual(converter.convert('10kg'), 
      {"initNum":"10","initUnit":"kg","returnNum":22.046244201837776,"returnUnit":"lbs","string":"10 kilograms converts to 22.04624 pounds"});

      assert.deepEqual(converter.convert('10lbs'), 
      {"initNum":"10","initUnit":"lbs","returnNum":4.53592,"returnUnit":"kg","string":"10 pounds converts to 4.53592 kilograms"});

      assert.deepEqual(converter.convert('10.5lbs'), 
      {"initNum":"10.5","initUnit":"lbs","returnNum":4.762716,"returnUnit":"kg","string":"10.5 pounds converts to 4.76272 kilograms"});
      
      done();
    });
  });
});