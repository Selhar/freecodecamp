const create = require('./create');
const fetch = require('./fetch');
const remove = require('./remove');
const update = require('./update');

exports.create = create.create;
exports.fetch = fetch.fetch;
exports.update = update.update;
exports.remove = remove.remove;


const Thread = require('../../models/Thread');

// exports.teste = (request, response) => {
//     let thread = new Thread({
//         title: "teste",
//         password: "boga",
//         replies: [
//             {
//                 text: "teste1"
//             },
//             {
//                 text: "teste2"
//             }
//         ]
//     });

//     thread.save((error, data) => {
//         console.log(data);
//     })
// }