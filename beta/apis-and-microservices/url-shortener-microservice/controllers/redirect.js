const UrlModel = require('../models/url');

exports.redirect = (request, response) => {
    UrlModel.findOne({short_url: request.params.short_url}, (error, data) => {
        if(error)
            return response.json({error:"An unidentified error ocurred."});
        
        if(data){
            response.redirect(data.original_url);    
        }else{
            response.json({error:"This url is not registered in our system."});
        }
    });
}
