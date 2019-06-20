
const express = require('express');
const pubService = require('pub-services').services.pubService;
const app = express();

app.get('/pubs', function (req, res) {
    const pubs = pubService.listPubs();
    res.status(200).json(pubs);
})

app.get('/pubs/today', function (req, res){
    let days = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday'];
    let dayNb = new Date().getDay();
    const pubs = pubService.pubsOpenOnDay(days[dayNb]);
    res.status(200).json(pubs);
})
var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});