'use strict'

let key = require('./index.js');

key.getLocationCallback('www.google.com', function(error, response, body){
	console.log(error,response,body);
});

key.getLocationPromise('www.google.com')
.then(function(success){
	console.log(success);
})
.catch(function(error){
	console.log(error);
});