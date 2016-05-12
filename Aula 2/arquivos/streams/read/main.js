'use strict'

const fs = require('fs');

const readable = fs.createReadStream(
	`${__dirname}/lorem.txt`,
	{
		encoding: 'utf-8',
		highWaterMark: 512
	}
);

readable.on('data', chunk => console.log(1));

//console.log(content);