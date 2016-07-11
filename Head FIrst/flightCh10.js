var passengers = [ {name: "Jane Doloop", paid: true },
				   {name: "Dr. Evel", paid: false },
				   {name: "Sue Property", paid: true },
				   {name: "John Funcall", paid: true },
]

function processPassengers (passengers, testFunction) {
	for (var i = 0; i < passengers.length; i++) {
		if (testFunction(passengers[i])) {
			return false;
		}
	}
	return true;

}


function checkNoFlyList(passengers) {
	return (passengers.name === "Dr. Evel");
	
	}

function checkNoPaid(passengers) {
	return (!passengers.paid);
	
}
var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
	console.log("The plane can't take off: we have a passenger on the no-fly-list.");
	
}

var allPaid = processPassengers(passengers, checkNoPaid);
if (!allPaid) {
	console.log("The plane can't take off: not everyone has paid.");
}
function printPassenger(passenger) {
	var message = passenger.name;
	
	if (passenger.paid === true) {
		message = message + " has Paid";
	} else {
		message = message + " has not paid";
	}
	console.log(message);
	return false;
	
}
processPassengers(passengers, printPassenger);