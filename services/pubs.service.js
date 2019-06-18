
/**
 * Liste tous les pubs par leurs noms
 * @param {Le tableau des pubs en Json} JsonData 
 */
function listPubs(JsonTab){
    var listPubs = new Array(JsonTab.length);
    for(var i=0; i<JsonTab.length; i++){
        listPubs.push(JsonTab[i].name);
    }
    return listPubs;
}

/**
 * Retroune la liste des pubs ouvert le jour day
 * @param {Le jour} day 
 * @param {Le tableau des pubs} JsonTab 
 */
function pubsOpen(day, JsonTab){
    var result = new Array(JsonTab.length);
    for(var i=0; i<JsonTab.length; i++){
        JsonTab[i].open
    }
}

exports.pubsOpen = pubsOpen;
exports.listPubs = listPubs;
