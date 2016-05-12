'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('<html><body>Hello!</body></html>')
});

app.get('/api', (req, res) => {
	res.json({name: 'Fulano'});
});

const persons = {
	1: 'Diego',
	2: 'Victor',
	3: 'Lius'
}

app.get('/api/person/:id', (req, res) => {
	const id = req.params.id;
	res.send(`
		<html>
			<body>
				<h1>Person: ${persons[id]}</h1>
			</body>
		</html>
	`);
});

app.listen(port);