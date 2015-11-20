#!/usr/bin/env node

var pictureTube = require('picture-tube')
var tube = pictureTube();
var url = process.argv[2] || process.argc[3];

tube.pipe(process.stdout);
var request = require('request');
request.get(url).pipe(tube);