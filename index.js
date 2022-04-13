var Twit = require("twit");
var config = require('./config');

var T = new Twit(config);
var tweet = {
	status: "No"
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
	if(err){
		console.log(err);
	}
	else{
		console.log(data)
	}
}