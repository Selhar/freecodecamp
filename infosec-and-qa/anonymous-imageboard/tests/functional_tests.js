const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;
const ObjectID = require('mongodb').ObjectID;
const threads = [{title: "First thread"}, {title: "Second thread"}];
chai.use(chai_http);

suite('Functional testing', () => {
    suite('Boards', () => { 
        for(let thread of threads){
            test('Create threads', (done) => {
                chai.request(server).post(+new ObjectID()).send({title: thread.title}).end((request, response) => {
                    assert.equal(res.status, 200);
                    done();
                });                
            });
        }
    });
});