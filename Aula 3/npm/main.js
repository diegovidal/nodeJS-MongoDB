'use strict';

const moment = require('moment');
const lodash = require('lodash');

const now = moment();
const tomorrow = now.add(1, 'day');
const dmY = now.format('DD/MM/YYYY');

console.log(dmY);
console.log(lodash.range(1,10));