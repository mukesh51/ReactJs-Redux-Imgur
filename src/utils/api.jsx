var Fetch = require('whatwg-fetch');
var rooUrl = 'https://api.imgur.com/3/';
var apiKey = '8141eec835c54fa';

module.exports = window.api ={
	get: function(url) {
		return fetch(rooUrl + url, {
			headers: {
				'Authorization': 'Client-ID '+apiKey
			}
		})
		.then(function(response) {
			return response.json()
		})
	}
}