const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
let converter = require('../controllers/converter');

converter = new converter();

suite('Functional testing', () => {
    suite('Conversion', () => {
      test('Whole number input', function(done) {
        done();
      });
    });
    suite('Routing', () => {

    });
});
