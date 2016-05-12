var express = require('express');
var router = express.Router();
var UserBusiness = require('./user-business');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, (err, users) => {
  	res.json(users);
  });
});

router.post('/', (req, res) => {
	UserBusiness.save(req.body, (err, newUser) => {
		if (err) {console.log(err); res.status(500).end(); return;}
		res.json(newUser);
	});
});

router.get('/:id', (req, res) => {
	UserBusiness.findOne(req.params.id, (err, user) => {
		if (err) {console.log(err); res.status(500).end(); return;}
		res.json(user);
	});
});

router.put('/:id', (req, res) => {
	req.body.id = req.params.id;
	UserBusiness.save(req.body, (err, user) => {
		if (err) {console.log(err); res.status(500).end(); return;}
		res.json(user);
	});
});

router.delete('/:id', (req, res) => {
	UserBusiness.remove(req.params.id, err => res.status(201).end());
});

module.exports = router;
