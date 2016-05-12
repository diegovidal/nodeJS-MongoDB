'use strict';

const EventEmitter = require('events');
const AppEvents = require('./app-events');

const emitter = new EventEmitter();

setTimeout(() => emitter.emit(AppEvents.HELLO), 0);

module.exports = emitter;