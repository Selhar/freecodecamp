const UserModel = require('../models/user');
const ExerciseModel = require('../models/exercise');

exports.fetch_logs = (request, response) => {
    return response.json({from: request.params.from, to: request.params.to, id: request.params.id});
}