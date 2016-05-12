'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	let result = {
		name: 'Fulano',
		phone: 985251091
	};

	res.end(JSON.stringify(result));

}).listen(3000);
