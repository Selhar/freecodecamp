const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
let converter = require('../controllers/converter');

converter = new converter();

suite('Functional testing', () => {
    suite('Conversion', () => {
      test('Whole number input', function(done) {
        assert.equal(converter.convert('1lb'), 0.45359237);
        assert.equal(converter.convert('1mi'), 1.60934);
        assert.equal(converter.convert('1gal'), 3.78541);
        done();
      });
    });
    suite('Routing', () => {

    });
});
