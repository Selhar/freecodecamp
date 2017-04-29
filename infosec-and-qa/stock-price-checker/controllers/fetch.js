const req = require('request');

exports.fetch = (request, response) => {
    const stock = request.query.stock;
    const isLiked = request.query.like;
    const API = 'https://finance.google.com/finance/info?q=NASDAQ%3a'+stock;

    req.get({url: API,json: true,headers: {'User-Agent': 'request'}}, (error, res, data) => {
        if (error) {
            throw error;
        } else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode);
        } else {
            return response.json(data);
        }
    });
}

