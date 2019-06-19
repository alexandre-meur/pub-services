#!/usr/bin/env node

var program = require('commander');

program
    .version('1.0.0')
    .option('-l, --list', 'Get the pubs list')
    .option('-o, --open', 'Get the pubs open today')
    .parse(process.argv);
if (program.list) {
    let listPubs = require('../src/main').listPubs;
    console.log(listPubs());
}
else if(program.open){
    let pubsOpenOnDay = require('../src/main').pubsOpenOnDay;
    let days = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday'];
    let dayNb = new Date().getDay();
    console.log(pubsOpenOnDay(days[dayNb]));
}
