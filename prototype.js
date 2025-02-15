/*

  Description: This code is used to simulate the prototype pattern.
  Context: Sharing the same properties and methods among objects.

*/

class entryPrototype {
	constructor(location, phoneNumber) {
		this.location = location;
		this.phoneNumber = phoneNumber;
	}

	setLocation(location) {
		this.location = location;
	}

	clone() {
		return new entryPrototype(this.location, this.phoneNumber);
	}
}

const entry1 = new entryPrototype("School", "1234567890");
const entry2 = entry1.clone();
entry2.setLocation("Hospital");

console.log(entry1); // School
console.log(entry2); // School
