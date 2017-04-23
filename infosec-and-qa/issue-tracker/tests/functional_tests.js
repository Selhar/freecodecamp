const chai_http = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chai_http);

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
        done();
      });   
    });
  });
  // suite('Deleting an issue', () => {
    // 
  // });
  // suite('Updating an issue', () => {
    // 
  // });
  // suite('Fetching an issue', () => {
    // 
  // });
});
