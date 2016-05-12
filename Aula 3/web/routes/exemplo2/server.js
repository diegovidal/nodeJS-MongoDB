'use strict';

const express = require('express');
const app = express();

app.get('/api/person/:id/contacts/:contactId', (req, res) => {

	const personId = req.params.id;
	const contactId = req.params.contactId;

	res.send(`
		<html>
			<body>
				<h1> ${personId} </h1>

				<h2>${contactId} </h2>
			</body>
		</html
		`)
});

app.listen(3000);