var fs = require('fs')
var str = fs.readFileSync(process.argv[2])
str = str.toString()
console.log(str.split('\n').length - 1)
