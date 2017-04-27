const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;

chai.use(chai_http);
const title = ['The witcher: time of contempt', 'The second foundation'];
const comment = ['Ciri a qtie', 'The mule was right tho'];

suite('Functional testing', () => {
    suite('Create a new book', () => {
        test('Create book 1', (done) => {
            chai.request(server).post('/api/books').send({title: title[0]}).end((request, response) => {
                assert.deepEqual(response.body.title, title[0]);     
                done();                     
            });
        });
        test('Create book 2', (done) => {
            chai.request(server).post('/api/books').send({title: title[1]}).end((request, response) => {
                assert.deepEqual(response.body.title, title[1]);   
                done();             
            });
        });
        test('Create a book with repeated title', (done) => {
            chai.request(server).post('/api/books').send({title: title[0]}).end((request, response) => {
                assert.equal(response.text, 'A book with this name already exists');
                done();
            });
        });
    });
    suite('Fetching books', () =>{
        test('Fetch all books');
    });
});