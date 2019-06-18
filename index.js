
var pubService = require('./services/pubs.service');
var data = require('./mocks/pubs.json');

console.log(pubService.listPubs(data));
console.log(pubService.pubsOpenOnDay('Monday', data));
console.log(pubService.pubsOpenOnDay('Wednesday', data));

module.exports = {
    services: {
        pubService: pubService
    }
}