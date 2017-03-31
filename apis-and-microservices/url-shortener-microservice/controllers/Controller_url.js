const UrlModel = require('../models/Model_url');
const http_request = require('request');
const url = require("url");

exports.add_url = (request, response) => {
    const full_url = request.body.url;

    if(isUrlValid(full_url)){
        const parsed_url = full_url.replace(/(^\w+:|^)\/\//, '');
        const short_url = parsed_url.slice(0, 4);

        let new_url = new UrlModel({
            original_url: full_url,
            short_url: short_url
        });
        new_url.save((error) => {
            if(error){
                console.log("***** Error: "+error);
            }
        });
        response.json({boga: "boga"});
    }
};

exports.fetch_url = (request, response) => {
    response.json({whereami: "fetch"});
}

exports.delete_url = (request, response) => {
    response.json({whereami: "delete"});
}

function isUrlValid(url){
    return http_request(url, (error, response) => {
        if(!error && response.statusCode === 200){
            return true;
        }else{
            return false;
        }
    });
}