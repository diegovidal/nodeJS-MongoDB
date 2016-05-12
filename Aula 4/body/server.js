'use strict';

const express = require('express');
const morgan = require('morgan');
const moment = require('moment');
const bodyParser = require('body-parser');

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
	//console.log(req.params);

	const dateCalculated = moment()
	.add(req.query.daysNumber, 'days')
	.format('DD/MM/YYYY');
	
	res.render('person', {
		id: req.params.id,
		date: dateCalculated
	});

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

app.post('/api/person',bodyParser.json(), (req,res) => {
	console.log(req.body);
	res.json(req.body);
});

app.listen(3000);