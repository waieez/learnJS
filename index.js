"use strict";
var express = require('express'),
	app = express();


app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index.html.ejs')
});

app.listen(3000, function(){
	console.log('listening @ port 3000');
});



module.exports = app;