function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function() {
	if (this.weight > 25) {
		console.log(this.name + " says Woof!");
	} else {
		console.log(this.name + " says Yip!");
	}
};

Dog.prototype.run = function() {
	console.log("Run!");
};

Dog.prototype.wag = function() {
	console.log("Wag!");
}

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
	if (this.sitting) {
		console.log(this.name + " is already sitting.");
	} else {
		this.sitting = true;
		console.log(this.name + " is now sitting");
	}
};


var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var barnaby = new Dog("Barnaby", "Basset Hound", 55);



spot.bark = function() {
	console.log(this.name + " says WOOF!");
};

barnaby.sit();
barnaby.sit();

spot.sit();
spot.sit();

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();


function ShowDog(name, breed, weight, handler) {
	Dog.call(this, name, breed, weight);
	this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville"

ShowDog.prototype.stack = function() {
	console.log("Stack");
};

ShowDog.prototype.bait = function() {
	console.log("bait");
};

ShowDog.prototype.groom = function() {
	console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier:", 15, "Cookie");

if (fido instanceof Dog) {
	console.log("Fido is a Dog");
}

if (fido instanceof ShowDog) {
	console.log("Fido is a show Dog");
}

if (scotty instanceof Dog) {
	console.log("Scotty is a Dog");
}

if (scotty instanceof ShowDog) {
	console.log("Scotty is a show Dog")
}
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

