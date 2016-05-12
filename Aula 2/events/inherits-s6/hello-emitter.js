'use strict';

const EventEmitter = require('events');

module.exports = class HelloEmitter extends EventEmitter{

	constructor(name){
		super();
		this.name = name;
	}

	sayHi(){
		console.log(this.name);
		this.emit('hi');
	}

}
