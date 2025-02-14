/*

  Description: This code is used to simulate the observer pattern.
  Context: Team have 4 player, player number 3 go to another location then when the others open the map, they can see player 3 (PUBG Mobile).

*/

class Observer {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	// Update observer
	update(location, currObserver) {
		this.sendLocation(location, currObserver);
	}

	// Send location
	sendLocation(location, currObserver) {
		console.log(`${this.name}: ${currObserver.getName()} is at ${location}`);
	}
}

class Team {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	notify(location, currObserver) {
		return this.observers
			.filter((observer) => observer !== currObserver)
			.forEach((observer) => observer.update(location, currObserver));
	}
}

const team = new Team();
const player1 = new Observer("Player 1");
const player2 = new Observer("Player 2");
const player3 = new Observer("Player 3");

team.addObserver(player1);
team.addObserver(player2);
team.addObserver(player3);

// Example: Player 3 go to "School" and send location to the team except player 3
team.notify("School", player3);
