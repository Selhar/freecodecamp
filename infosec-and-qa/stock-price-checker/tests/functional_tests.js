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
            assert.equal(response.body.likes, 0);
            done();
        });
    });
    test('send in 1 stock with like', (done) => {
        chai.request(server).get('/api/stock-prices').query({stock: 'GOOG', like: true}).end((error, response) => {
            assert.property(response.body, 'price');
            assert.property(response.body, 'stock');
            assert.property(response.body, 'likes');
            assert.equal(response.body.likes, 1);
            done();
        });
    });
    test('Send a repeated like from the same IP', (done) => {
        chai.request(server).get('/api/stock-prices').query({stock: 'GOOG', like: true}).end((error, response) => {
            assert.equal(response.body.likes, 1);
            done();
        });
    });
    test('2 stocks', (done) => {
       chai.request(server).get('/api/stock-prices').query({stock: ['IBM','MSFT']}).end((err, res) => {
          assert.equal(res.status, 200);
          assert.isArray(res.body.stockData);
          assert.property(res.body.stockData[0], 'stock');
          assert.property(res.body.stockData[0], 'price');
          assert.property(res.body.stockData[0], 'rel_likes');
          assert.property(res.body.stockData[1], 'stock');
          assert.property(res.body.stockData[1], 'price');
          assert.property(res.body.stockData[1], 'rel_likes');
          assert.oneOf(res.body.stockData[0].stock, ['GOOG','MSFT']);
          assert.oneOf(res.body.stockData[1].stock, ['GOOG','MSFT']);
          assert.equal(res.body.stockData[0].rel_likes + res.body.stockData[1].rel_likes, 0);
          rel_likes = Math.abs(res.body.stockData[0].rel_likes);
          done();
        });
      });
      
      test('2 stocks with like', function(done) {
       chai.request(server)
        .get('/api/stock-prices')
        .query({stock: ['MSFT','IBM'], like: true})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.isArray(res.body.stockData);
          assert.property(res.body.stockData[0], 'stock');
          assert.property(res.body.stockData[0], 'price');
          assert.property(res.body.stockData[0], 'rel_likes');
          assert.property(res.body.stockData[1], 'stock');
          assert.property(res.body.stockData[1], 'price');
          assert.property(res.body.stockData[1], 'rel_likes');
          assert.oneOf(res.body.stockData[0].stock, ['GOOG','MSFT']);
          assert.oneOf(res.body.stockData[1].stock, ['GOOG','MSFT']);
          assert.equal(res.body.stockData[0].rel_likes + res.body.stockData[1].rel_likes, 0);
          assert.equal(Math.abs(res.body.stockData[0].rel_likes),rel_likes);
          done();
        });
      });
});