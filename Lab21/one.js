var express = require('express');
var app = express();

var favoriteThings= ["pikitis!", "i love you and i like you", "punkass book jockies", "get on your feet", "Never half ass two things always full ass one thing", "ann you beautiful tropcial fish"];

var randomIndex= Math.floor(Math.random()* favoriteThings.length);
var random = favoriteThings[randomIndex]; 


app.get('/',function(req, res){
	res.send(random);

});
app.get('/random', function(req, res){
	res.send(favoriteThings);
});

var server = app.listen(3000, function(){
	var port= server.address().port;
	  console.log('Example app listening at http://localhost:%s', port);

});