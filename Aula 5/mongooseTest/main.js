var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', {name: String});

var kitty = new Cat({name: 'Seila'});
kitty.save(function (err) {
	if (err) {console.log(err); return;}
	console.log('meow');
});