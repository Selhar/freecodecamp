const chai = require('chai');
const assert = chai.assert;

suite('Unit testing', () => {
  test('No Numerical Input', function(done) {
    var input = 'kg';
    assert.equal(convertHandler.getNum(input),1);
    done();
  }); 
  
});