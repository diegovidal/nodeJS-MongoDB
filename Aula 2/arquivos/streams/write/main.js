'use strict'

const fs = require('fs');

const readable = fs.createReadStream(
	`${__dirname}/lorem.txt`,
	{
		encoding: 'utf-8',
		highWaterMark: 512
	}
);

const writable = fs.createWriteStream(`${__dirname}/novo.txt`);

//readable.on('data', chunk => writable.write(chunk));

readable.pipe(writable);