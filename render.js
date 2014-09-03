/**
 * Module dependencies.
 */

// speed is supposed to be from 0 to 80
function draw(output, width, height, speed)
{
	var Canvas = require('canvas')
	  , canvas = new Canvas(width, height / 2)
	  , ctx = canvas.getContext('2d')
	  , fs = require('fs');


	var speedometer = require('./speedometer.js');
	speedometer.draw(canvas, width, height, speed);
	  
	var out = fs.createWriteStream(__dirname + '/' + output)
	  , stream = canvas.createPNGStream();

	stream.on('data', function(chunk){
	  out.write(chunk);
	});
}

draw('speedo.png', 500, 500, 65);