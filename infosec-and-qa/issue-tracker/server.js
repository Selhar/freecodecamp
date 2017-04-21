const express = require('express');
const server = express();
const root = process.cwd();
const helmet = require('helmet');
const body_parser = require('body-parser');

server.use(helmet());
server.use('/public', express.static(root + '/public'));
server.use(body_parser.json());
server.use(body_parser.urlencoded({ extended: true }));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.POST('/api/issues/:project/:title/:text/:author/:assignee?/:status?', TODO.temp);
server.PUT('/api/issues/:project/:title?/:text?/:author?/:assignee?/:status?', TODO.temp);
server.DELETE('/api/issues/:project/:id', TODO.tempo);
server.get('/api/issues/:project/:title?/:text?/:author?/:assignee?/:status?', TODO.temp);


server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server;