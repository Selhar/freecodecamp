const chai = require('chai');
const assert = chai.assert;
const converter = require('../controllers/converter');

suite('Unit testing', () => {
  test('No Numerical Input', function(done) {
    var input = 'kg';
    assert.equal(converter.convert(input),1);
    done();
  }); 
  
});