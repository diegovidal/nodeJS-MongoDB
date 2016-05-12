'use strict';

const EventEmitter = require('events');
const util = require('util');

function Hello(){
	this.str = 'Minha String';
}

util.inherits(Hello, EventEmitter);

Hello.prototype.sayHi = function (){
	console.log(`Hello ${this.str}`);
	this.emit('evento-1');
};

const hello = new Hello();
hello.on('evento-1', () => console.log('Evento 1 ocorreu'));

hello.sayHi();

