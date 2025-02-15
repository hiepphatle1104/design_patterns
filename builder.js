/*

  Description: This code is used to simulate the builder pattern.
  Context: Used to build a detail of each apartment.

*/

class House {
	constructor(builder) {
		this.door = builder.door;
		this.windows = builder.windows;
		this.floor = builder.floor;
	}

	toString() {
		return `Door: ${this.door}, Window: ${this.windows}, Floor: ${this.floor}`;
	}
}

class Builder {
	constructor() {
		this.door = 0;
		this.windows = 0;
		this.floor = 0;
	}

	setDoor(door) {
		this.door = door;
		return this;
	}

	setWindow(windows) {
		this.window = windows;
		return this;
	}

	setFloor(floor) {
		this.floor = floor;
		return this;
	}

	build() {
		return this;
	}
}

const builder = new Builder();
builder.setDoor(1).setWindow(2).setFloor(3).build();

const house = new House(builder);
console.log(house.toString());
