/*
    Author: Selhar
    Date: 2017
    Contact: selhar@protonmail.com
    License: GPL
*/

const express = require('express');
const server = express();
const root = process.cwd();
const multer = require('multer');
const upload = multer({ dest: './storage' });


server.use('/public', express.static(root + '/public'));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.post('/api/fileanalyse',upload.single('upfile'), function(request, response){
   response.json({
    'name' : request.file.originalname,
    'type' : request.file.mimetype,
    'size' : request.file.size
   });
});

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});
