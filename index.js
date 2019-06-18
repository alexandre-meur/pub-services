
var pubService = require('./services/pubs.service');
var data = require('./mocks/pubs.json');

console.log(data);

console.log(pubService.listPubs(data));

module.exports = {
    services: {
        pubService: pubService
    }
}