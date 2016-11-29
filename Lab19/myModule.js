


function randomize (){
var favoriteThings= ["i love you and i like you", "punkass book jockies", "get on your feet", "Never half ass two things always full ass one thing", "ann you beautiful tropcial fish",
"pikitis!"];

var randomIndex= Math.floor(Math.random()* favoriteThings.length);
var random = favoriteThings[randomIndex]; 
	return random;
}

exports.randomize= randomize; 

