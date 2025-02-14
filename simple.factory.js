/*

  Description: This code is used to simulate the simple factorry pattern.
  Context: Applications in logistics and transportation.

*/

// without factory pattern
const service1 = (cargo) => {
	switch (cargo) {
		case 10:
			return {
				message: "Deliver by truck with 10 tons of cargo",
				cost: 1000,
			};

		case 20:
			return {
				message: "Deliver by truck with 20 tons of cargo",
				cost: 2000,
			};
	}
};

console.log(service1(10));

// with factory pattern
class Service2 {
	constructor(cargo = 10, cost = 1000) {
		this.cargo = cargo;
		this.cost = cost;
	}

	static getService = (cargo) => {
		switch (cargo) {
			case 10:
				return new Service2(10);

			case 20:
				return new Service2(20, 2000);
		}
	};
}

console.log(Service2.getService(10));
