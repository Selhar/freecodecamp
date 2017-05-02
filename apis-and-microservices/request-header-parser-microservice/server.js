/*
    Author: Selhar
    Date: 2017
    Contact: selhar@protonmail.com
    License: GPL
*/

const express = require('express');
const server = express();
const root = process.cwd();
server.use('/public', express.static(root + '/public'));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.get('/whoami', (request, response) => {
    response.json({ipaddress: request.ip, language: request.headers['accept-language'], software: request.headers['user-agent']});
});

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});
