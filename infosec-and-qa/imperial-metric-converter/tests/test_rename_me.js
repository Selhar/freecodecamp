const chai = require('chai');
const chai_http = require('chai-http');
const should = chai.should();
const server = require('../server');

chai.use(chai_http);

describe('Boilerplate', () => {
    
    it('Server is working', (done) => {
        chai.request(server)
        .get('/error')
        .end((error, response) => {
            response.should.have.status(400);
            done();
        })
    });
    
    it('Should contain a lot of tests!', (done) => {
        done();
    });
});