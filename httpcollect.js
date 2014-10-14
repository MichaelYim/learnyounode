var concat = require('concat-stream')
var http = require('http')

http.get(process.argv[2], function(res){
	res.setEncoding('utf-8')
	var write = concat(function(data) {
		console.log(data.length);
		console.log(data);
	})
	x = res.pipe(write).toString
	
})	