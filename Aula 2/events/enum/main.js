'use strict';

const EventEmitter = require('events');
const AppEvents = require('./app-events');

const emitter = new EventEmitter();

emitter.on(AppEvents.Hello, () => console.log('Hello World!'));
emitter.on(AppEvents.HI, () => console.log('Hi Universe!'));

emitter.emit(AppEvents.Hello);
emitter.emit(AppEvents.HI);