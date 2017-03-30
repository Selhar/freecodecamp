const Counter = require('../models/counter');
const UrlModel = require('../models/url');

function increment_counter (request, response) {
    Counter.findOneAndUpdate({}, {$inc:{'count': 1}}, (error, output) => {
        if(error){
            console.log("**** error: "+ error);
            return;
        }else{
            
        }
    })
}

exports.add_url = (request, response) => {
    response.json({whereami: "add"});
};

exports.fetch_url = (request, response) => {
    response.json({whereami: "fetch"});
}

exports.delete_url = (request, response) => {
    response.json({whereami: "delete"});
}