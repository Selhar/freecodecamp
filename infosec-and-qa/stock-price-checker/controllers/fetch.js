let request = require('request');

exports.fetch = (request1, response) => {
    request.get('https://finance.google.com/finance/info?q=NASDAQ%3aGOOG', (error, response, body)=> {
        if (!error && response.statusCode === 200) {
            const fbResponse = JSON.parse(body)
            console.log("Got a response: ", fbResponse.picture)
        } else {
            console.log("Got an error: ", error, ", status code: ", response.statusCode)
        }
    });
}

