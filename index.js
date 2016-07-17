
var express = require('express');
var multer  = require('multer');
var bodyParser = require('body-parser');
var	path = require('path');
var app = express()

//var mongo = require("mongodb").MongoClient;
//var mongoURI = "mongodb://admin:imageurl@ds023704.mlab.com:23704/imageurl" ||'mongodb://localhost:27017/imagesearch';

app.use(bodyParser.json());

app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

// mongo.connect(mongoURI, function(err, db) {
//   if(err) {throw new Error('Database failed to connect!');}
//   db = db.collection("uploadedFiles");

//Must change destination, make sure to connect to mongodb.
//would this just be db instead?
app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){
	// console.log(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	 */
  //  res.render(req.file);
	console.log(req.file); //form files
 res.send({size: req.file.size});
  /*            { fieldname: 'upl',
                originalname: 'String',
                encoding: '7bit',
                mimetype: 'image',
                destination: 'database',
                filename: 'Alpha Numeric Output',
                path: 'database/Alpha Numeric Output',
                size: <in bites> }
  	 */
  	res.status(204).end();
  });


  var port = process.env.PORT || 3000;
    app.listen(port, function() {
      console.log("server.js listening on port " + port + "...");
    
  });
