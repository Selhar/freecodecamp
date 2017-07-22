const user = require('./user');
const exercise = require('./exercise');
const logs = require('./logs');

exports.add_user = user.add_user;
exports.add_exercise = exercise.add_exercise;
exports.fetch_log = logs.fetch_logs;