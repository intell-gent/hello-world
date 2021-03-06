function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}
Robot.prototype.maker = "Sky Net";

Robot.prototype.speak = function() {
		alert("beep Boop!")
}

Robot.prototype.makeCoffee = function() {
		alert("One Coffee made to order");
}

Robot.prototype.blinkLights =function() {
		alert("Blink blink!");
}

var robby = new Robot("Robby", 2057, "Nick");
var rosie = new Robot("Risie", 2050, "Jenny");

robby.onOffSwitch = true;
robby.makeCoffee = function() {
	alert("Brewing robby's extra special brew!");
}


rosie.cleanHouse = function() {
	console.log("It's time to take out the trash!");
}


console.log(robby.name + " was made by " + robby.maker +
			" in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker +
			" in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();

function SpaceRobot(name, year, owner, homePlanet) {
	this.name = name;
	this.year = year;
	this.owner = owner;
	this.homePlanet = homePlanet;
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function() {
	alert(this.name + " says Sir, if i may venture an opinion...");
}

SpaceRobot.prototype.pilot = function () {
	alert(this.name + " says Thrusters? Are they important?");
}

var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);

var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();