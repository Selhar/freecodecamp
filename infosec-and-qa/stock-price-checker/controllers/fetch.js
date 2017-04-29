const req = require('request');
const StockModel = require('../models/stock');
const waterfall = require("async/waterfall");

exports.fetch = (request, response) => {
    const stock_name = request.query.stock;
    const isLiked = request.query.like;
    const API = 'https://finance.google.com/finance/info?q=NASDAQ%3a'+stock_name;
    
    waterfall([ 
        function findStockAndUpdate(callback){
                let updateData = isLiked ? {$inc: {likes: 1}} : {};
                StockModel.findOneAndUpdate({stock: stock_name}, updateData, (stock) => {
                    if(stock)
                        callback(null, stock);
                    else
                        callback(null);
                });
        }, function retrieveApiData(callback){
            req.get({url: API,json: true,headers: {'User-Agent': 'request'}}, (error, res, data) => {
                if (error) {
                    callback(error);
                } else if (res.statusCode !== 200) {
                    return callback('Status:', res.statusCode);
                } else {
                    const what_the_fuck_is_up_with_this_endpoint = JSON.parse(data.substring(4))[0];
                    let stock_data = {stock_name: what_the_fuck_is_up_with_this_endpoint.t, price: what_the_fuck_is_up_with_this_endpoint.l};
                    return callback(null, stock_data);
                }
            }); 
        }, function saveNewStock(stock, callback){
                if(stock)
                    callback(null);
                else{
                    const stock = new StockModel({stock: stock_name, likes: isLiked ? 1 : 0});
                    stock.save((error) => {
                        if(error)
                            return callback(error);
                        else
                            return callback(null, stock);
                    });
                }
                
            }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during fetch process: '+error+'\n');
            return response.send(error);
        }
        return response.json({title: result.title, _id: result._id});
    }
}