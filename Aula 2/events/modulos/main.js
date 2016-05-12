'use strict';

const hello = require('./hello');
const AppEvents = require('./app-events');

hello.on(AppEvents.Hello, () => console.log('Hello World!'));
hello.on(AppEvents.HI, () => console.log('Hi Universe!'));
