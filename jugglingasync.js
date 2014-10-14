var concat = require('concat-stream')
var http = require('http')

var returnCount = 0;
var saved = [];

for (i = 2; i < 5; i++){httpGet(i)};

function httpGet (i){
	http.get(process.argv[i], function(res){
		res.setEncoding('utf-8')
		res.pipe(concat(function(data) {
			saved[i] = data;
			returnCount ++;
			if (returnCount == 3) print()

		}))
	})
}

function print() {
	for (i = 2; i < 5; i++){
	console.log(saved[i])
	}	
};