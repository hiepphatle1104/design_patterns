/*

  Description: This code is used to simulate the adapter pattern.
  Context: Translate from ENG to VN

*/

class English {
	constructor(word) {
		this.word = word;
	}
}

class Adapter {
	constructor(english) {
		this.english = english;
	}

	translate() {
		return this.english.word === "hello" && "xin chào";
	}
}

class Vietnamese {
	constructor(adapter) {
		this.adapter = adapter;
	}

	say() {
		return this.adapter.translate();
	}
}

// give the word "hello" to the English class
const english = new English("hello");

// pass the English class to the Adapter class
// to translate the word "hello" to Vietnamese
const adapter = new Adapter(english);

// pass the Adapter class to the Vietnamese class
// to say the word "hello" in Vietnamese
const vietnamese = new Vietnamese(adapter);

console.log(vietnamese.say()); // xin chào
