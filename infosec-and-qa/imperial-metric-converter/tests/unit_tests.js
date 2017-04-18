const chai = require('chai');
const assert = chai.assert;
let converter = require('../controllers/converter');

converter = new converter();

suite('Unit testing', () => {
  suite('Input processing', () => {
    test('Typeof', (done) => {
      assert.typeOf(converter.processInput('1gal'), 'object');
      done();
    });
    test('Object returned', function(done) {
      assert.equal(converter.processInput('1gal'),{value: 1, type: "gal"});
      assert.equal(converter.processInput('1lbs'),{value: 1, type: "lbs"});
      assert.equal(converter.processInput('1mi'),{value: 1, type: "mi"});
      assert.equal(converter.processInput('1l'),{value: 1, type: "l"});
      assert.equal(converter.processInput('1kg'),{value: 1, type: "kg"});
      assert.equal(converter.processInput('1km'),{value: 1, type: "km"});
      done();
    }); 
  });
});