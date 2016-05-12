const crypto = require('crypto');
const hash = crypto.createHash('sha256');

hash.update('diegoevidal');
console.log(hash.digest('hex'));