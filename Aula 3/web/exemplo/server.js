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

app.listen(port);