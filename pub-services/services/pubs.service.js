
/**
 * Liste tous les pubs par leurs noms
 * @param {Le tableau des pubs en Json} JsonData 
 */
function listPubs(JsonTab) {
    var listPubs = new Array(JsonTab.length);
    for (var i = 0; i < JsonTab.length; i++) {
        listPubs[i] = JsonTab[i].name;
    }
    return listPubs;
}

/**
 * Retroune la liste des pubs ouvert le jour day
 * @param {Le jour} day 
 * @param {Le tableau des pubs} JsonTab 
 */
function pubsOpenOnDay(day, JsonTab) {
    var result = new Array();
    for (var i = 0; i < JsonTab.length; i++) {
        if (JsonTab[i].openDays.includes(day)) {
            result.push(JsonTab[i].name);
        }
    }
    return result;
}

exports.pubsOpenOnDay = pubsOpenOnDay;
exports.listPubs = listPubs;
