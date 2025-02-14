/*

  Description: This code is used to simulate the proxy pattern.
  Context: You want to get more money from the customer and customer tell his/her boss to pay more money.

*/

class Leader {
	receiveOffer(offer) {
		console.log("Leader received message: ", offer);
	}
}

class Employee {
	constructor() {
		this.leader = new Leader();
	}

	receiveOffer(offer) {
		this.leader.receiveOffer(offer);
	}
}

class Developer {
	constructor(offer) {
		this.offer = offer;
	}

	requestOffer(target) {
		target.receiveOffer(this.offer);
	}
}

const developer = new Developer("I want more money");
developer.requestOffer(new Employee());
