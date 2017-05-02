const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;
const ObjectID = require('mongodb').ObjectID;
const threads = [{title: "First thread", text: "fgsfds"}, 
                 {title: "Second thread", text: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"}];
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
                assert.property(res.body[0], 'id');
                assert.property(res.body[0], 'creation_date');
                assert.property(res.body[0], 'last_post');
                assert.property(res.body[0], 'text');
                assert.property(res.body[0], 'title');
                assert.property(res.body[0], 'replies');
                assert.notProperty(res.body[0], 'reported');
                assert.notProperty(res.body[0], 'delete_password');
                assert.isArray(res.body[0].replies);
                assert.isAtMost(res.body[0].replies.body.length, 3);
                done();
            });
        });
    });    
});