const create = require('./create');
const fetch = require('./fetch');
const remove = require('./remove');

exports.create = create.create;
exports.fetch = fetch.fetch;
exports.fetchById = fetch.fetchById;
exports.remove = remove.remove;
exports.createComment = create.createComment;