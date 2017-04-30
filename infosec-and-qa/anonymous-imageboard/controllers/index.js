const create = require('./create');
const fetch = require('./fetch');
const remove = require('./remove');
const update = require('./update');

exports.create = create.create;
exports.fetch = fetch.fetch;
exports.update = update.update;
exports.remove = remove.remove;