const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;
const expect = chai.expect;

chai.use(chai_http);

let books = [{title: 'The witcher: time of contempt', comment: 'Ciri a qtie', id: ''},
             {title: 'The second foundation', comment: 'The mule was right tho', id: ''}]

suite('Functional testing', () => {
    suite('Create a new book', () => { 
        for (let book of books){
            test('Create a book', (done) => {
                chai.request(server).post('/api/books').send({title: book.title}).end((request, response) => {
                    expect(response.body).to.have.property('title');
                    expect(response.body).to.have.property('_id');
                    assert.isString(response.body.title);
                    assert.deepEqual(response.body.title, book.title);  
                    book.id = response.body._id;   
                    done();                     
                });
            });
            test('Add a comment', (done) => {
                chai.request(server).post('/api/books/'+book.id).send({comment: book.comment}).end((request, response) => {
                    expect(response.body).to.have.property('title');
                    expect(response.body).to.have.property('_id');
                    expect(response.body).to.have.property('commentCount');
                    assert.isString(response.body.title);
                    assert.deepEqual(response.body.title, book.title);                      
                    assert.isNumber(response.body.commentCount);
                    done();                     
                });
            });
        }
        test('Comment with invalid ID', (done) => {
           chai.request(server).post('/api/books/'+'00feb000000d00000c0c0000').send({comment:' book.comment'}).end((request, response) => {
                    assert.equal(response.text, 'Book ID not found.');                   
                    done();                     
            });
        });
    });
    suite('Delete a book', () => {
        for(let book of books){
            test('delete a book', (done) => {
                //DELETE /api/books/:id, return 'delete successful'
                chai.request(server).delete('/api/books/'+book.id).end((request, response) => {
                    assert.equal(response.text, 'Book successfully deleted.');
                    done();
                });
            });
        }
    });
});