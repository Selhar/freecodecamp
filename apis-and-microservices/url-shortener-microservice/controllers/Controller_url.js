const UrlModel = require('../models/Model_url');
const http_request = require('request');
const url = require("url");

/*
if(isUrlValud){
    if(isOriginalUrlInDB){
        return DATA;
    }else{
        let short_url = parse(originalurl);
        
        while(isShortUrlInDb){
            short_url = parse(originalurl);
        }
        saveData(originalurl,shorturl);
        return DATA;
    }
}else{
    return ERROR;
}
*/
exports.add_url = (request, response) => {
    const full_url = request.body.url;

    if(isUrlValid(full_url)){
        UrlModel.findOne({original_url: full_url}, (error, stored_url) => {
            if(error){
                console.log(error);
                return response.json({error: "An unidentified error ocurred"});
            }else if(stored_url){
                return response.json({original_url: stored_url.original_url, short_url: stored_url.short_url});
            }else{
                const sanitized_url = full_url.replace(/(^\w+:|^)\/\/(w{3}.)?/, '');
                let short_url = sanitized_url.slice(0, 4);
                const index = 0;
                
                //short url example: ABC, output: ABC0, ABC1, ABC2...
                while(findShortUrl(short_url)){
                    if(short_url.length > 3){
                        short_url.replace(index, ++index);
                    }else{
                        short_url += index;
                    }
                }

            }
        })
    }else{
        return response.json({error: "invalid url"});
    }    
};

exports.fetch_url = (request, response) => {
    response.json({whereami: "fetch"});
}

exports.delete_url = (request, response) => {
    response.json({whereami: "delete"});
}

function findShortUrl(url){
    let result = UrlModel.findOne({short_url: url}, (error, result) => {
        if(!error && result){
            return true;
        }{
            return false;
        }
    });
    return result;
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