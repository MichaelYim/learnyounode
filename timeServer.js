var net = require("net")

var server = net.createServer(function callback (socket) {
	date = new Date();
	printOut = date.getFullYear() +"-"+ date.getMonth() +"-"+ date.getDate() +" "+ date.getHours() +":"+ date.getMinutes()
	console.log(printOut)
	socket.write(printOut)
	socket.end()

})
server.listen(process.argv[2])

// because the verification uses a different timezone, it may try to verify for a different date even if you have 
// the right answer...