/*

  Description: This code is used to simulate the factorry pattern.
  Context: Applications in logistics and transportation.

*/

class Car {
	constructor({ model = "Toyota", year = 2010, price = 1000, buyer = {} }) {
		this.model = model;
		this.year = year;
		this.price = price;
		this.buyer = buyer;
	}
}

class Truck {
	constructor({
		model = "Truck 10tons",
		year = 2011,
		price = 2000,
		buyer = {},
	}) {
		this.model = model;
		this.year = year;
		this.price = price;
		this.buyer = buyer;
	}
}

// Logic processing
class Service {
	transporter = Car;
	getInfo(buyer) {
		return new this.transporter(buyer);
	}
}

// Usage
const service = new Service();
console.log(service.getInfo({ buyer: { name: "John Doe", age: 30 } }));

// Other transporters
class TruckService extends Service {
	transporter = Truck;
}

const truckService = new TruckService();
console.log(truckService.getInfo({ buyer: { name: "John Doe", age: 40 } }));
