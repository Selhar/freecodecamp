const create = require('./create');
const fetch = require('./fetch');
const remove = require('./remove');
const update = require('./update');

exports.create = create.create;
exports.fetch = fetch.fetch;
exports.fetchById = fetch.fetchById;
exports.remove = remove.remove;
exports.update = update.update;
exports.createComment = create.createComment;