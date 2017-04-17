const chai = require('chai');
const assert = chai.assert;

suite('Converter', function(){
  
  suite('Numeric input validation', () => {
    test('No Numerical Input', function(done) {
      var input = 'kg';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
});