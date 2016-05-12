'use strict'

const fs = require('fs');
const zlib = require('zlib');

const readable = fs.createReadStream(
	`${__dirname}/lorem.txt`,
	{
		encoding: 'utf-8',
		highWaterMark: 512
	}
);

const writable = fs.createWriteStream(`${__dirname}/novo.txt`);
const compressed = fs.createWriteStream(`${__dirname}/comp.txt.gz`);
const gzip = zlib.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);