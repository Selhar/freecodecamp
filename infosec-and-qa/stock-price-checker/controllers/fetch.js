let request = require('request');

exports.fetch = (request, response) => {
    const stock = request.query.stock;
    const isLiked = request.query.like;
    const API = 'https://finance.google.com/finance/info?q=NASDAQ%3aGOOG';

    request({url: API, json: true}, (error, response, data) => {
        if (error) {
            throw error;
        } else if (response.statusCode !== 200) {
            console.log('Status:', response.statusCode);
        } else {
            return response.json(data);
        }
    });
}

