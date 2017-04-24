const chai_http = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chai_http);
let project_id = "";

suite('Functional testing', () => {
  suite('Creating a new issue', () => {
    test('Dummy data is properly returned', (done) => { 
      const dummy_data = {
        title: 'First title',
        text: 'Lorem ipsum placeholder text',
        author: 'Fenthick Moss',
        assignee: 'Aribeth Tylmarande',
        status: 'Solving the wailing death'
      };

      chai.request(server).post('/api/issues/test').send(dummy_data).end((error, response) => {
        assert.equal(response.status, 200);
        assert.property(response.body, 'title');
        assert.property(response.body, 'text');
        assert.property(response.body, 'author');
        assert.property(response.body, 'latest_update');
        assert.property(response.body, 'assignee');
        assert.property(response.body, 'status');
        assert.deepEqual(response.body.title, dummy_data.title);
        assert.deepEqual(response.body.text, dummy_data.text);
        assert.deepEqual(response.body.author, dummy_data.author);
        assert.deepEqual(response.body.assignee, dummy_data.assignee);
        assert.deepEqual(response.body.status, dummy_data.status);
        project_id = response.body._id;
        done();
      });   
    });
  });
  suite('Updating an issue', () => {
    test('Existing issue update', (done) => {
      const new_status = "Looking for aribeth";
      const isOpen = false;
      chai.request(server).put('/api/issues/test').send({_id: project_id, status: new_status, open: isOpen}).end((error, response) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'successfully updated');
        assert.deepEqual(response.body.status, new_status);
        assert.deepEqual(response.body.open, isOpen);
        done();
      });   
    });
    test('Updating with no parameters', function(done) {
      chai.request(server).put('/api/issues/test').send({_id: project_id}).end( (error, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'no updated field sent');
        done();
      });        
    });
    test('Updating with inexistent ID', function(done) {
      chai.request(server).put('/api/issues/test').send({_id: 'inexistent_id'}).end( (error, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'no updated field sent');
        done();
      });        
    });
  });
  // suite('Fetching an issue', () => {
    // 
  // });
  // suite('Deleting an issue', () => {
    // 
  // });
});