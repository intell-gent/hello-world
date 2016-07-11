var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021
};
var cadi = {
	make: "GM",
	modle: "cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892
};

var dog = {
	name: "Fido",
	weight: 20.2,
	age: 4,
	breed: "mixed",
	activity: "fetch balls"
};
dog.bark = false;
if (dog.weight > 20) {
		dog.bark = "WOOF WOOF";
		
} else {
	dog.bark = "woof woof"
}
var speak = dog.name + " says " + dog.bark + " when he wants to " + dog.activity;
console.log (speak);