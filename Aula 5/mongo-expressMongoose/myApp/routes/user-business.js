'use strict';
const User = require('./model/user');


const find = (filter, cb) => {
	User.find(filter, cb);
};

const findOne = (filter, cb) => {
	User.findOne(filter, cb);
};

const save = (params, cb) => {
	if (params.id){
		update(params, cb);
	} else{
		create(params, cb);
	}
};

const update = (params, cb) => {
	const id = params.id;
	delete params.id;

	User.findByIdAndUpdate(id, params, cb);
};

const create = (params, cb) => {
	const user = new User(params);
	user.save((err) => {
		if(err) return cb(err);
		cb(null, user);
	});
};

const remove = (id, cb) => {
	User.findByIdAndRemove(id, cb);
};

module.exports = { find, findOne, save, update, create, remove };
