const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;
chai.use(chai_http);

suite('Functional testing', () => {
    test('send in 1 stock', (done) => {
        chai.request(server).get('/api/stock-prices').query({stock: 'GOOG'}).end((error, response) => {
            assert.property(response.body, 'price');
            assert.property(response.body, 'stock');
            assert.property(response.body, 'likes');
            done();
        });
    });
    test('send in 1 stock with like', (done) => {
        chai.request(server).get('/api/stock-prices').query({stock: 'GOOG', like: true}).end((error, response) => {
            assert.property(response.body, 'price');
            assert.property(response.body, 'stock');
            assert.property(response.body, 'likes');
            done();
        });
    });
});