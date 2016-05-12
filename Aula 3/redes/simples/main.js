'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});

	fs.readFile(
	`${__dirname}/index.html`,
	'utf-8',
	(err, content) => {
		if (err) {
			res.end(404);
			return;
		}
			res.end(content);
	});
	


}).listen(3000);
