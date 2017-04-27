const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;

chai.use(chai_http);

let book1 = {title: 'The witcher: time of contempt', comment: 'Ciri a qtie', id: ''};
let book2 = {title: 'The second foundation', comment: 'The mule was right tho', id: ''}

suite('Functional testing', () => {
    suite('Create a new book', () => {
        test('Create book 1', (done) => {
            chai.request(server).post('/api/books').send({title: book1.title}).end((request, response) => {
                assert.deepEqual(response.body.title, book1.title);  
                book1.id = response.body._id;   
                done();                     
            });
        });
        test('Create book 2', (done) => {
            chai.request(server).post('/api/books').send({title: book2.title}).end((request, response) => {
                assert.deepEqual(response.body.title, book2.title);   
                book2.id = response.body._id;
                done();             
            });
        });
        test('Create a book with repeated title', (done) => {
            chai.request(server).post('/api/books').send({title: book1.title}).end((request, response) => {
                assert.equal(response.text, 'A book with this name already exists');
                done();
            });
        });
    });
    suite('Create a comment', () => {
        test('Comment 1', (done) => {
            chai.request(server).post('/api/books/'+book1.id).send({comment: book1.comment}).end((request, response) => {
                assert.deepEqual(response.body.comment, book1.comment);
                done();
            });
        });
    });
    // suite('Fetching books', () => {
    //     test('Fetch all books', (done) => {
    //         chai.request(server).get('/api/books').end((request, response) => {
    //             assert.isArray(response.body);
    //             assert.equal(response.text, 'A book with this name already exists');
    //             done();
    //         });
    //     });
    // });
});