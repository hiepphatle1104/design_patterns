/*

  Description: This code is used to simulate the facade pattern.
  Context: Calculate cost of a product in ecommerce.

*/

class Discount {
	calc(value) {
		return value * 0.9;
	}
}

class Shippping {
	calc(value) {
		return value + 5;
	}
}

class Tax {
	calc(value) {
		return value * 1.05;
	}
}

class TotalCost {
	constructor() {
		this.discount = new Discount();
		this.shipping = new Shippping();
		this.tax = new Tax();
	}

	totalPrice(price) {
		price = this.discount.calc(price);
		price = this.shipping.calc(price);
		price = this.tax.calc(price);

		return price;
	}
}

const buy = (price) => {
	const totalCost = new TotalCost();
	console.log("Price after checking: ", totalCost.totalPrice(price));
};

buy(120000);
