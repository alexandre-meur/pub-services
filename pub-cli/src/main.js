
var pubService = require('pub-services');

module.exports = {
    listPubs : pubService.services.pubService.listPubs,
    pubsOpenOnDay : pubService.services.pubService.pubsOpenOnDay,
}