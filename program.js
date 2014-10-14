var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	if (req.method != 'GET'){
		return res.end('not get');	
		}
	else{
		var parsed = url.parse(req.url, true)
		query = parsed.query
		dateObj = new Date(query.iso)
		if (parsed.pathname =='/api/parsetime'){
			

			returnObject = {}
				returnObject.hour = dateObj.getHours()
				returnObject.minute = dateObj.getMinutes()
				returnObject.second = dateObj.getSeconds()
			res.end(JSON.stringify(returnObject));

		}
		else if(parsed.pathname =='/api/unixtime'){
			console.log("this is a unix request")
			returnObject = {}
			returnObject.unixtime = dateObj.getTime();
			res.end(JSON.stringify(returnObject));
		}
	}
});

server.listen(process.argv[2]);