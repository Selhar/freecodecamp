const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;
const ObjectID = require('mongodb').ObjectID;
const threads = [{title: "First thread", text: "fgsfds"}, 
                 {title: "Second thread", text: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"}];
let thread_id = '';
chai.use(chai_http);

suite('Functional testing', () => {
    suite('Threads', () => { 
        for(let thread of threads){
            test('Create threads', (done) => {
                chai.request(server).post('/'+thread.title).send({thread}).end((request, response) => {
                    assert.equal(response.status, 200);
                    done();
                });                
            });
        }
        test('Fetch threads', (done) => {
            chai.request(server).get('/').end((request, response) => {
                assert.equal(response.status, 200);
                assert.isArray(response.body);
                assert.isAtMost(response.body.length, 10);
                assert.property(response.body[0], '_id');
                assert.property(response.body[0], 'creation_date');
                assert.property(response.body[0], 'last_post');
                assert.property(response.body[0], 'text');
                assert.property(response.body[0], 'title');
                assert.property(response.body[0], 'replies');
                assert.notProperty(response.body[0], 'reported');
                assert.notProperty(response.body[0], 'delete_password');
                assert.isArray(response.body[0].replies);
                assert.isAtMost(response.body[0].replies.length, 3);
                thread_id = response.body[0]._id;
                done();
            });
        });
        test('Delete thread with incorrect password', (done) => {
            chai.request(server).get('/').end((request, response) => {
                
                done();
            });
        });
    });    
});