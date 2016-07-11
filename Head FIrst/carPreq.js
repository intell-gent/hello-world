var taxi = {
	make: "Webville Motors",
	model: "taxi",
	year: 1955,
	color: "yello",
	passengers: 4,
	convertible: false,
	mileage: 281341,
};

var cadi = {
	make: "GM",
	model: "Cadillacc",
	year: 1955,
	color: "Tan",
	passengers: 5,
	convertible: false,
	mileage: 12892

};

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000
};

var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021
};


function prequal (car) {
	if (car.mileage > 10000) {
		return false;
	
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}

var worthALook = prequal(taxi);

if (worthALook) {
	console.log("You gotta check this " + taxi.make + " " + taxi.model);

} else {
	console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

var worthALook = prequal(cadi);

if (worthALook) {
	console.log("You gotta check this " + cadi.make + " " + cadi.model);
	
} else {
	console.log("You should really pass on the " + cadi.make + " " + cadi.model);
	
}

var worthALook = prequal(fiat);

if (worthALook) {
	console.log("You gotta check this " + fiat.make + " " + fiat.model);
	
} else {
	console.log("You should pass on the " + fiat.make + " " + fiat.model);
	
}

var worthALook = prequal(chevy);

if (worthALook) {
	console.log("You gotta check this " + chevy.make + " " + chevy.model);
	
} else {
	console.log(" You should pass on the " + chevy.make + " " + chevy.model);
	
}
























