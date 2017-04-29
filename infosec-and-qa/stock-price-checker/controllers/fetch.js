let request = require('request');

exports.fetch = (request, response) => {
    const stock = request.query.stock;
    const isLiked = request.query.like;
    const API = 'https://finance.google.com/finance/info?q=NASDAQ%3aGOOG';

 request(API, (error, response, body)=> {
  if (!error && response.statusCode === 200) {
    const fbResponse = JSON.parse(body)
    console.log("Got a response: ", fbResponse.picture)
  } else {
    console.log("Got an error: ", error, ", status code: ", response.statusCode)
  }
})
}

