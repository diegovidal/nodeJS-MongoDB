'use strict'

const fs = require('fs');

const content = fs.readFileSync(`${__dirname}/lorem.txt`, 'utf-8');

console.log(content);