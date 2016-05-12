var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	emai: String,
	number: String
});

// set da collection
var User = mongoose.model('list', userSchema);

module.exports = User;