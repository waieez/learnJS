var express = require('express');
var app = express();
var renderFile = require('ejs').renderFile;

app.engine('html', renderFile);

app.use(express.static("./client"));

app.get('/', function (req, res){
  res.render('index.html')
})

app.listen(3000, function(){
  console.log('listening on port 3000');
})