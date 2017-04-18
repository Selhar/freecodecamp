const chai = require('chai');
const assert = chai.assert;
let converter = require('../controllers/converter');

converter = new converter();

suite('Unit testing', () => {
  
  suite('Sanitization', () => {
    test('Validate input', (done) => {
      
      for(type of converter.conversion_types){
        assert.equal(converter.isInputValid('1'+type), true);
      }

      assert.equal(converter.isInputValid('gal1'),true);
      assert.equal(converter.isInputValid('gal'), false);
      assert.equal(converter.isInputValid('1'), false);
      assert.equal(converter.isInputValid('-1'), false);
      assert.equal(converter.isInputValid(1), false);
      done();
    });
  });

  suite('Input processing', () => {
    test('Expected data types', (done) => {
      // assert.typeOf(converter.processInput('1gal'), 'object');
      // assert.typeOf(converter.processInput('5lbs').value, 'number');
      // assert.typeOf(converter.processInput('114km').type, 'string');
      done();
    });
    
    test('Expected object values', (done) => {
      // assert.deepEqual(converter.processInput('1gal'), {value: 1, type: 'gal'});
      // assert.deepEqual(converter.processInput('1lbs'), {value: 1, type: 'lbs'});
      // assert.deepEqual(converter.processInput('1mi'),  {value: 1, type: 'mi'});
      // assert.deepEqual(converter.processInput('1l'),   {value: 1, type: 'l'});
      // assert.deepEqual(converter.processInput('1kg'),  {value: 1, type: 'kg'});
      // assert.deepEqual(converter.processInput('1km'),  {value: 1, type: 'km'});
      done();
    }); 
    
    test('Expected invalid inputs', (done) => {
      assert.deepEqual(converter.processInput('x'),   converter.error.input_format_error);
      assert.deepEqual(converter.processInput('1'),   converter.error.input_format_error);
      assert.deepEqual(converter.processInput('km'),  converter.error.input_format_error);
      assert.deepEqual(converter.processInput('km5'), converter.error.input_format_error);
      done();
    });
  });
});