const chai = require('chai');
const assert = chai.assert;
const converter = require('../controllers/index');

suite('Unit testing', () => {
  test('No Numerical Input', function(done) {
    var input = 'kg';
    assert.equal(convertHandler.getNum(input),1);
    done();
  }); 
  
});