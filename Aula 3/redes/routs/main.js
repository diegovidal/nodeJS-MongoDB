'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	
	if (req.url === '/') {
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	else if (req.url === '/api') {
		res.writeHead(200, {'Content-Type': 'application/json'});

		let result = {
			name: 'Fulano',
			phone: 985251091
		};

		res.end(JSON.stringify(result));
	}
	else{
		res.writeHead(404);
		res.end();
	}

	

}).listen(3000);
