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
                console.log(response.body);
                assert.deepEqual(response.body.title, book1.title);  
                assert.isArray(response.body.comment);
                assert.deepEqual(response.body.title, book1.title);                
                assert.isNumber(response.body.commentcount);
                book1.id = response.body._id;   
                done();                     
            });
        });
    });
});