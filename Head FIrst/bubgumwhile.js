var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
var i = 0;

while (i < hasBubbleGum.length) {
	i = i + 1
	console.log(i);
	if (hasBubbleGum[i]) {
	console.log(products[i] + " contains bubble gum");
	
	}
}