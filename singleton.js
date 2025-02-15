/*

  Description: This code is used to simulate the singleton pattern.
  Context: Round-robin scheduling algorithm, load balancer

*/

class LoadBalancer {
	constructor() {
		// Check if the instance exists
		// If it does, return the instance
		// If it doesn't, that instance is this instance
		if (LoadBalancer.instance) return LoadBalancer.instance;
		LoadBalancer.instance = this;

		this.servers = [];
		this.currServer = 0;
	}

	addServer(server) {
		this.servers.push(server);
	}

	getServer() {
		if (!this.servers.length) return new Error("No servers available");

		const server = this.servers[this.currServer];

		// Modulus
		console.log("Before:", this.currServer);
		this.currServer = (this.currServer + 1) % this.servers.length;
		console.log("After:", this.currServer);

		return server;
	}
}

// Usage
const loadBalancer = new LoadBalancer();
const loadBalancer2 = new LoadBalancer();

// console.log(loadBalancer === loadBalancer2);

loadBalancer.addServer("server1");
loadBalancer.addServer("server2");
loadBalancer.addServer("server3");

console.log(loadBalancer.getServer(), "\n");
console.log(loadBalancer.getServer(), "\n");
console.log(loadBalancer.getServer(), "\n");
console.log(loadBalancer.getServer(), "\n");
console.log(loadBalancer.getServer(), "\n");
console.log(loadBalancer.getServer(), "\n");
