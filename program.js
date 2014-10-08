var mymodule = require('./mymodule.js')
var fs = require('fs')

var callback = function(err, list) {
	if (err) {
		console.log("There seems to be an error")
	}
	console.log(list)
}

mymodule(process.argv[2],process.argv[3],callback);
