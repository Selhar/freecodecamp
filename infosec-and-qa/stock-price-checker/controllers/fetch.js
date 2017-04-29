const req = require('request');

exports.fetch = (request, response) => {
    const stock = request.query.stock;
    const isLiked = request.query.like;
    const API = 'https://finance.google.com/finance/info?q=NASDAQ%3a'+stock;

    req.get({url: API,json: true,headers: {'User-Agent': 'request'}}, (error, res, data) => {
        if (error) {
            throw error;
        } else if (res.statusCode !== 200) {
            return console.log('Status:', res.statusCode);
        } else {
            const what_the_fuck_is_up_with_this_endpoint = JSON.parse(data.substring(4))[0];
            return response.json({stock: what_the_fuck_is_up_with_this_endpoint.t, price: what_the_fuck_is_up_with_this_endpoint.l});
        }
    });
}

