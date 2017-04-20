const chai_http = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
const converter = require('../controllers/converter');

chai.use(chai_http);

suite('Functional testing', () => {
  suite('Output processing', () => {
    test('4gal', (done) => {
      chai.request(server).get('/api/convert/4gal').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"4","initUnit":"gal","returnNum":15.16,"returnUnit":"l","string":"4 gallon(s) converts to 15.16 liter(s)"});
        done();
       });
    });

    test('4.5gal', (done) => {
      chai.request(server).get('/api/convert/4.5gal').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"4.5","initUnit":"gal","returnNum":17.055,"returnUnit":"l","string":"4.5 gallon(s) converts to 17.055 liter(s)"});
        done();
       });
    });

    test('5km', (done) => {
      chai.request(server).get('/api/convert/5km').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"5","initUnit":"km","returnNum":3.1,"returnUnit":"mi","string":"5 kilometer(s) converts to 3.1 mile(s)"});
        done();
       });
    });

    test('4.5km', (done) => {
      chai.request(server).get('/api/convert/4.5km').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"4.5","initUnit":"km","returnNum":2.79,"returnUnit":"mi","string":"4.5 kilometer(s) converts to 2.79 mile(s)"});
        done();
       });
    });

    test('10mi', (done) => {
      chai.request(server).get('/api/convert/10mi').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"10","initUnit":"mi","returnNum":16.1,"returnUnit":"km","string":"10 mile(s) converts to 16.1 kilometer(s)"});
        done();
       });
    });

    test('10.5mi', (done) => {
      chai.request(server).get('/api/convert/10.5mi').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"10.5","initUnit":"mi","returnNum":16.905,"returnUnit":"km","string":"10.5 mile(s) converts to 16.905 kilometer(s)"});
        done();
       });
    });

    test('105l', (done) => {
      chai.request(server).get('/api/convert/105l').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"105","initUnit":"l","returnNum":27.3,"returnUnit":"gal","string":"105 liter(s) converts to 27.3 gallon(s)"});
        done();
       });
    });

    test('105.3l', (done) => {
      chai.request(server).get('/api/convert/105.3l').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"105.3","initUnit":"l","returnNum":27.378,"returnUnit":"gal","string":"105.3 liter(s) converts to 27.378 gallon(s)"});
        done();
       });
    });

    test('10.2kg', (done) => {
      chai.request(server).get('/api/convert/10.2kg').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"10.2","initUnit":"kg","returnNum":22.44,"returnUnit":"lbs","string":"10.2 kilogram(s) converts to 22.44 pound(s)"});
        done();
       });
    });

    test('10kg', (done) => {
      chai.request(server).get('/api/convert/10kg').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"10","initUnit":"kg","returnNum":22,"returnUnit":"lbs","string":"10 kilogram(s) converts to 22 pound(s)"});
        done();
       });
    });

    test('10lbs', (done) => {
      chai.request(server).get('/api/convert/10lbs').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"10","initUnit":"lbs","returnNum":4.5,"returnUnit":"kg","string":"10 pound(s) converts to 4.5 kilogram(s)"});
        done();
       });
    });

    test('10.5lbs', (done) => {
      chai.request(server).get('/api/convert/10.5lbs').end((error, response) => {
        assert.deepEqual(response.body, {"initNum":"10.5","initUnit":"lbs","returnNum":4.7250000000000005,"returnUnit":"kg","string":"10.5 pound(s) converts to 4.7250000000000005 kilogram(s)"});
        done();
       });
    });
  });
});
