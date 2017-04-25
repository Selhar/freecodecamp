const chai_http = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
const ObjectID = require('mongodb').ObjectID;

chai.use(chai_http);
let project_id = "";
let issue_id = "";

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
      chai.request(server).put('/api/issues/test').send({new_issue: {_id: project_id, status: new_status, open: isOpen}}).end((error, response) => {
        assert.equal(response.status, 200);
        assert.equal(response.text, 'successfully updated');
        done();
      });   
    });
    test('Updating with no parameters', function(done) {
      chai.request(server).put('/api/issues/test').send({new_issue: {_id: project_id}}).end( (error, response) => {
        assert.equal(response.status, 200);
        assert.equal(response.text, 'no fields were provided for update');
        done();
      });        
    });
    test('Updating with inexistent ID', function(done) {
      chai.request(server).put('/api/issues/test').send({new_issue: {_id: new ObjectID("00feb000000d00000c0c0000"), status: "hi"}}).end( (error, response) => {
        assert.equal(response.status, 200);
        assert.equal(response.text, 'issue does not exist');
        done();
      });        
    });
  });
  suite('Fetching an issue', () => {
    test('Inexistent project', (done) => {
      const project_name = 'dqnw1o2k3jnj1l';
      chai.request(server).get('/api/issues/'+project_name).end( (error, response) => {
        assert.equal(response.text, 'there are no projects with the name '+project_name);
        done();
      })
    });
    test('Broad search for a whole project', (done) => {
      chai.request(server).get('/api/issues/test').end( (error, response) => {
        assert.isArray(response.body);
        assert.property(response.body[0], 'title');
        assert.property(response.body[0], 'text');
        assert.property(response.body[0], 'creation_date');
        assert.property(response.body[0], 'latest_update');
        assert.property(response.body[0], 'author');
        assert.property(response.body[0], 'assignee');
        assert.property(response.body[0], 'isOpen');
        assert.property(response.body[0], 'status');
        assert.property(response.body[0], '_project');
        done();
      });
    });
    test('search with parameters', (done) => {
      chai.request(server).get('/api/issues/test/').query({status: 'Looking for aribeth', isOpen: true}).end( (error, response) => {
        assert.deepEqual(response.body[0].author, 'Fenthick Moss');
        issue_id = response.body[0]._id;
        done();
      });
    });
  });
  suite('Deleting an issue', () => {
    test('deleted data', (done) => {
      chai.request(server).delete('/api/issues/test').send({id: issue_id}).end((error, response) => {
        assert.equal(response.text, 'deleted issue of id: '+issue_id);
      });
    });
  });
});