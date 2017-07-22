const create = require('./create');
const fetch = require('./fetch');
const remove = require('./remove');
const update = require('./update');

exports.create = create.create;
exports.fetch = fetch.fetch;
exports.report = update.report;
exports.remove = remove.remove;
exports.fetchById = fetch.fetchById;


