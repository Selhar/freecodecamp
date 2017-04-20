/*
    Prevent cross site scripting(XSS attack).
    I can POST /api/issues/{projectname} with form data containing required issue_title, issue_text, created_by, and optional assigned_to and status_text.
    The object saved (and returned) will include all of those fields (blank for optional no input) and also include created_on(date/time), updated_on(date/time), open(boolean, true for open, false for closed), and _id.
    I can PUT /api/issues/{projectname} with a _id and any fields in the object with a value to object said object. Returned will be 'successfully updated' or 'could not update '+_id. This should always update updated_on. If no fields are sent return 'no updated field sent'.
    I can DELETE /api/issues/{projectname} with a _id to completely delete an issue. If no _id is sent return '_id error', success: 'deleted '+_id, failed: 'could not delete '+_id.
    I can GET /api/issues/{projectname} for an array of all issues on that specific project with all the information for each issue as was returned when posted.
    I can filter my get request by also passing along any field and value in the query(ie. /api/issues/{project}?open=false). I can pass along as many fields/values as I want.
    All 11 functional tests are complete and passing.

*/

const express = require('express');
const server = express();
const root = process.cwd();
const helmet = require('helmet');
const body_parser = require('body-parser');

let converter = require('./controllers/converter');

server.use(helmet());
server.use('/public', express.static(root + '/public'));
server.use(body_parser.json());
server.use(body_parser.urlencoded({ extended: true }));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.get('/api/convert/:data', converter.convert);

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server;