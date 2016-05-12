'use strict';

const util = require('util');

const str = 'World';
const strToLog = util.format('Hello. %s', str);

console.log(strToLog);
util.log(strToLog);
