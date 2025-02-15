/*

  Description: This code is used to simulate the bridge pattern.
  Context: Separate to many classes

*/

class PaymentProcess {
	pay() {
		throw new Error("This method must be overwritten!");
	}
}

class VisaPayment extends PaymentProcess {
	constructor(cardNumber, cvv, amount) {
		super();
		this.cardNumber = cardNumber;
		this.cvv = cvv;
		this.amount = amount;
	}

	pay(amount) {
		console.log(`Visa payment of ${amount} has been made.`);
	}
}

class MomoPayment extends PaymentProcess {
	constructor(phoneNumber, amount) {
		super();
		this.phoneNumber = phoneNumber;
		this.amount = amount;
	}

	pay(amount) {
		console.log(`Momo payment of ${amount} has been made.`);
	}
}

const visaPayment = new VisaPayment("123456789", "123", 100);
visaPayment.pay(100);

const momoPayment = new MomoPayment("0987654321", 100);
momoPayment.pay("");
