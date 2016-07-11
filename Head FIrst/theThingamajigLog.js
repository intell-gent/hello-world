function clunk(times) {
	var num = times;
	while (num > 0) {
		display("clunk");
		num = num - 1;
		console.log("times: " + times);
		console.log("num: " + num);
	}
}

function thingamajig(size) {
	var facky = 1;
	clunkCounter = 0;
	console.log("facky: " + facky);
	console.log("size: " + size);
	
	if (size == 0){
		display("clank");
		
	} else if (size == 1) {
		display("thunk");
		
	} else {
		while (size > 1) {
			facky = facky * size;
			size = size - 1;
			console.log("facky: " + facky);
			console.log("size: " + size);
			
		}
		clunk(facky);
		console.log("size updated: " + size);
		console.log("facky updated: " + facky);
	}
}

function display(output) {
	console.log("output: " + output);
	clunkCounter = clunkCounter + 1;
	console.log("clunkCounter: " + clunkCounter);
}
var clunkCounter = 0;
thingamajig(3);
console.log("clunkCounter end: " + clunkCounter);