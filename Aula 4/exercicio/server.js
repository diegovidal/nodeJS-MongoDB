'use strict';

const express = require('express');
const morgan = require('morgan');
const moment = require('moment');
const bodyParser = require('body-parser');
const tokenAccess = require('./config');

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

const user = {username: 'diegovidal', pwd: '123'};

app.get('/api/token/:token', (req, res) => {

	const token = req.params.token;

	if (tokenAccess.token && tokenAccess.token == token) {

		res.send(`
			<html>
				<body>
					<h1> Deu Certo </h1>
					<h2>Autenticado </h2>
				</body>
			</html>
		`);
	}
	else{
		res.status(401).end();
	}

	// if (user.username == username && user.pwd == pwd) {

	// 	res.send(`
	// 		<html>
	// 			<body>
	// 				<h1> Deu Certo </h1>
	// 				<h2>Autenticado </h2>
	// 			</body>
	// 		</html>
	// 	`);
	// }
	// else{
	// 	res.status(401).end();
	// }
});

app.post('/api/person',bodyParser.json(), (req,res) => {
	console.log(req.body);
	res.json(req.body);
});

app.listen(3000);