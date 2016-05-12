'use strict'

const fs = require('fs');

fs.readFile(
	`${__dirname}/lorem.txt`,
	'utf-8',
	(err, content) => {
		if (err) {
			console.log(err);
			return;
		}
			console.log(content);
	}
);

//console.log(content);