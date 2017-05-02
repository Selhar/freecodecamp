const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;
const ObjectID = require('mongodb').ObjectID;
const threads = [{title: "First thread"}, {title: "Second thread"}];
chai.use(chai_http);

suite('Functional testing', () => {
    suite('Threads', () => { 
        for(let thread of threads){
            test('Create threads', (done) => {
                chai.request(server).post('/'+thread.title).send({title: thread.title}).end((request, response) => {
                    assert.equal(response.status, 200);
                    done();
                });                
            });
        }
        test('Fetch threads', (done) => {
            chai.request(server).get('/').end((request, response) => {

            });
        });
    });    
});