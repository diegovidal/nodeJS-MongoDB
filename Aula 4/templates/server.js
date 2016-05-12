'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use('/', (req, res, next) => {
	console.log(`Request URL: ${req.url}`)
	next();
});

app.use(morgan('dev'));

app.set('view engine', 'ejs');

//app.use(express.static(`${__dirname}/publics`));

app.get('/', (req, res) => {

	res.render('index');
});

app.get('/api/person/:id', (req, res) => {

	res.render('person', {id: req.params.id});
});

app.get('/api/person/:id/contacts/:contactId', (req, res) => {

	const personId = req.params.id;
	const contactId = req.params.contactId;

	res.send(`
		<html>
			<body>
				<h1> ${personId} </h1>

				<h2>${contactId} </h2>
			</body>
		</html>
	`);
});

app.listen(3000);