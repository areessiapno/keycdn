'use strict'

let request = require('request');

module.exports = { 
	getLocationCallback: function(ip, callBack){
		request('https://tools.keycdn.com/geo.json?host=' + ip, function (error, response, body) {
			callBack(error, response.toJSON(), body);
		});
	},
	getLocationPromise: function(ip){
		return new Promise(function(resolve, reject){
			request('https://tools.keycdn.com/geo.json?host=' + ip, function (error, response, body) {
				if(error){
					reject(error);
				}
				else{
					resolve(response.toJSON());
				}
			})
		})
	}
}