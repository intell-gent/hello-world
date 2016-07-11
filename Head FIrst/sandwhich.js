 function getSandwitchOrder() {
	 
	 function Sandwich(cheese, bread, meat, lettuce, vegetables, other) {
					this.cheese = cheese;
					this.bread = bread;
					this.meat = meat;
					this.lettuce = lettuce;
					this.vegetables = vegetables;
					this.other = other;
				}
				var cloudwich = new Sandwich("Provolone", "foo B", "foo M", "foo L", 
												"foo V", "foo O");
				var boudsadywich = new Sandwich("Provolone", "foo B", "foo M", "foo L", 
												"foo V", "foo O");
				var kaserwich = new Sandwich("Provolone", "foo B", "foo M", "foo L", 
												"foo V", "foo O");
				var sandwichs = [cloudwich, boudsadywich, kaserwich];
 }
 