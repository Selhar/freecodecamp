const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;

chai.use(chai_http);
let id = '';

suite('Functional testing', () => {
    suite('Create a new book', () => {
        test('Create the book', (done) => {
            chai.request(server).post('/api/books').send({title: 'The second foundation'}).end((request, response) => {
                assert.deepEqual(response.body.title, 'The second foundation');
                id = response.body._id;
                done();
            });
        });
        test('Create a new comment', (done) => {
            chai.request(server).post('/api/books/'+id).send({comment: 'The mule was right tho'}).end((request, response) => {
                assert.deepEqual(response.body.comment, 'The mule was right tho');
                done();
            });         
        });
    });
});