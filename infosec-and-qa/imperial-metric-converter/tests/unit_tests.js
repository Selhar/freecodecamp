const chai = require('chai');
const assert = chai.assert;
let converter = require('../controllers/converter');

converter = new converter();

suite('Unit testing', () => {
  test('Input sanitization', function(done) {
    assert.equal(converter.sanitize('1gal'),{value: 1, type: "gal"});
    assert.equal(converter.sanitize('1lbs'),{value: 1, type: "lbs"});
    assert.equal(converter.sanitize('1mi'),{value: 1, type: "mi"});
    assert.equal(converter.sanitize('1l'),{value: 1, type: "l"});
    assert.equal(converter.sanitize('1kg'),{value: 1, type: "kg"});
    assert.equal(converter.sanitize('1km'),{value: 1, type: "km"});
    done();
  }); 
  
});