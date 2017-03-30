exports.new_url = (request, response) => {
    const url = request.url;
    response.json({the_url: url});
};