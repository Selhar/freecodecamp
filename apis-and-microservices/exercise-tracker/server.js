const express = require('express');
const mongoose = require('mongoose');
const server = express();
const root = process.cwd();
const controller = require('./controllers/index');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost:27017/exercisetracker");


server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({'extended': true}));
server.use('/public', express.static(root + '/public'));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.post('/api/exercise/new-user', controller.add_user);
server.post('/api/exercise/add', controller.add_exercise);
server.get('/api/exercise/log/:username/:from?/:to?/:index?', controller.fetch_log);

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});
