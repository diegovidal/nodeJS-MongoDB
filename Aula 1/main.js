"use strict";

let hello = require('./modulo');
let hello2 = require('./modulo');
const config = require('./config');

console.log(config);
hello.obj.firstname = 'Cicrano';

//hello.fn('pessoal');
console.log(hello.obj);
console.log(hello2.obj);