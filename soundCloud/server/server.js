var express = require('express');
var app = express();

app.use(express.static("./bower_components"));
app.use(express.static("./client"));
app.engine('html', require('ejs').renderFile);

app.get('/callback', function (req, res){
  res.render('callback.html')
});


app.get('/', function (req, res){
  res.render('index.html')
});

app.listen(3000, function(){
  console.log('listening on port 3000');
})