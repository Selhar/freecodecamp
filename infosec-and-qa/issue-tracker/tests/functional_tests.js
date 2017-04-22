const chai_http = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
const converter = require('../controllers/projects');

chai.use(chai_http);

suite('Functional testing', () => {
  suite('Creating a new issue', () => {
    const dummy_data = {
      title: 'First title',
      text: 'Lorem ipsum placeholder text',
      author: 'Fenthick Moss',
      assignee: 'Aribeth Tylmarande',
      status: 'Solving the wailing death'
    };

    chai.request(server).post('/api/issues/test').send(dummy_data).end((error, repsonse) => {
      assert.equal(response.status, 200);
      assert.property(res.body, 'title');
      assert.property(res.body, 'text');
      assert.property(res.body, 'author');
      assert.property(res.body, 'latest_update');
      assert.property(res.body, 'assignee');
      assert.property(res.body, 'status');

      assert.equal(res.body.title, dummy_data.title);
      assert.equal(res.body.text, dummy_data.text);
      assert.equal(res.body.author, dummy_data.author);
      assert.equal(res.body.assignee, dummy_data.assignee);
      assert.equal(res.body.status, dummy_data.status);
    });
  });
  suite('Deleting an issue', () => {
    
  });
  suite('Updating an issue', () => {
    
  });
  suite('Fetching an issue', () => {
    
  });
});
