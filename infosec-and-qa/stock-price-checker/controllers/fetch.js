const mongoose = require('mongoose');
const waterfall = require("async/waterfall");
const req = require('request');
const StockModel = require('../models/stock');

exports.fetch = (request, response) => {
    const stock_name = request.query.stock;
    const isLiked = request.query.like;
    const API = 'https://finance.google.com/finance/info?q=NASDAQ%3a'+stock_name;
    
    waterfall([ 
        //I attempt to update the "likes" field first, that way i can discover if the stock is already in the db or not
        //If i tried to save it first, it would throw an error if the stock was already in the DB
        function findStockAndUpdate(callback){
            let updateData = isLiked ? {$inc: {likes: 1}} : {};
            StockModel.findOneAndUpdate({stock: stock_name}, updateData, (error, stock) => {
                if(error){
                    return callback(error);
                }else if(stock){
                    return callback(null, stock);
                }else{
                    return callback(null, null);
                }
            });
        }, function retrieveApiData(stock, callback){
            req.get({url: API,json: true,headers: {'User-Agent': 'request'}}, (error, res, data) => {
                if (error) {
                    callback(error);
                } else if (res.statusCode !== 200) {
                    return callback('Status: '+res.statusCode);
                } else {
                    const what_the_fuck_is_up_with_this_endpoint = JSON.parse(data.substring(4))[0];
                    let stock_data = {stock_name: what_the_fuck_is_up_with_this_endpoint.t, price: what_the_fuck_is_up_with_this_endpoint.l};
                    return callback(null, stock_data, stock);
                }
            }); 
        }, function saveNewStock(stock_data, isStockInDB, callback){
                if(isStockInDB)
                    return callback(null, {stock: isStockInDB, stock_data: stock_data});
                else{
                    const stock = new StockModel({stock: stock_name, likes: isLiked ? 1 : 0});
                    stock.save((error) => {
                        if(error)
                            return callback(error);
                        else
                            return callback(null, {stock: stock, stock_data: stock_data});
                    });
                }                
            }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during fetch process: '+error+'\n');
            return response.send(error);
        }
        return response.json({stock: result.stock.stock, price: result.stock_data.price, likes: result.stock.likes});
    }
}