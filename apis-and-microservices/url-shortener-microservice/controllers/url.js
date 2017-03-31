const Counter = require('../models/counter');
const UrlModel = require('../models/url');

exports.add_url = (request, response) => {
    response.json({url: request.body.url});
};

exports.fetch_url = (request, response) => {
    response.json({whereami: "fetch"});
}

exports.delete_url = (request, response) => {
    response.json({whereami: "delete"});
}