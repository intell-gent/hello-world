var x = 32;
var y = 44;
var radius =  5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setup(width, height) {
	console.log("running setup")
	centerX = width/2;
	console.log("Seting centerX: " + centerX);
	centerY = height/2;
	console.log("setthing centerY: " + centerY);
}
function computeDistance(x1, y1, x2, y2){
	var dx = x1 - x2;
	console.log("dx: " + dx);
	var dy = y1 - y2;
	console.log("dy: " + dy);
	var d2 = (dx * dx) + (dy * dy);
	console.log("d2: " + d2);
	var d = Math.sqrt(d2);
	console.log("d: " + d)
	return d;
}

function circleArea(r) {
	var area = Math.PI * r * r;
	console.log("area local: " + area);
	return area;
}
setup(width, height);
var area = circleArea(radius);
var distance =computeDistance(x, y, centerX, centerY);
alert("Area: " + area);
alert("Distance: " + distance);