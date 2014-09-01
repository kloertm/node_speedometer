/**
 * Module dependencies.
 */

var Canvas = require('canvas')
  , canvas = new Canvas(500, 500)
  , ctx = canvas.getContext('2d')
  , fs = require('fs');


var speedometer = require('./speedometer.js');
speedometer.draw(canvas);
  
var out = fs.createWriteStream(__dirname + '/state.png')
  , stream = canvas.createPNGStream();

stream.on('data', function(chunk){
  out.write(chunk);
});
