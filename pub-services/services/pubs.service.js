
var JsonTab = require('../mocks/pubs');
/**
 * Liste tous les pubs par leurs noms
 * @param {Le tableau des pubs en Json} JsonData 
 */
function listPubs() {
    return JsonTab.map(pub => pub.name);
}

/**
 * Retroune la liste des pubs ouvert le jour day
 * @param {Le jour} day 
 * @param {Le tableau des pubs} JsonTab 
 */
function pubsOpenOnDay(day) {
    return JsonTab.filter(pub => pub.openDays.includes(day)).map(pub => pub.name);
}

exports.pubsOpenOnDay = pubsOpenOnDay;
exports.listPubs = listPubs;
