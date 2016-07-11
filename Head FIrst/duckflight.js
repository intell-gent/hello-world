var migrating = true;

var fly = function(num) {
	for (var i = 0; i < num; i++) {
		console.log("Flying!");
	}
};

function quack(num) {
	for (var i = 0; i < num; i++) {
		console.log("Quack!");
	}
}

if (migrating) {
	quack(4);
	fly(4);
	
}
 var  superFly = fly;

 superFly(2);
 
 var superQuack = quack;
 
 superQuack(3);