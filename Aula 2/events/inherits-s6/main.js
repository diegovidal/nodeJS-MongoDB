'use strict';

const HelloEmitter = require('./hello-emitter');

const helloEmitter = new HelloEmitter('fulano');
helloEmitter.on('hi', () => console.log('Evento aconteceu'));
helloEmitter.sayHi();

