var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/curso';

MongoClient.connect(url, function(err, db){

	if (err) {console.log(err); return;}
	console.log('Connect correctly to server.');

//db.collection('tools').insertOne({name: 'testes'});
//db.collection('tools').remove({name: 'testes'});

	var cursor = db.collection('tools').find();
	cursor.each((err, doc) => {
		if (err) {console.log(err); return;}
		console.log(doc);
		//db.close();

	});

});