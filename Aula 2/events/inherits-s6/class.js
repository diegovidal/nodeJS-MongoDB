'use strict';

class Hello {

	constructor(name) {
		this.name = name;
	}

	sayHi(){
		console.log(`Hello ${this.name}`);
	}
}

const helloFulano = new Hello('fulano');
helloFulano.sayHi();