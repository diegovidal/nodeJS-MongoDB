'use strict';

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('hello', () => console.log('Hello World!'));
emitter.on('hi', () => console.log('Hi Universe!'));

emitter.emit('hello');
emitter.emit('hi');