fs = require("fs")
fs.readFile(process.argv[2], function (err, data) {
  str = data
  str = str.toString()
  console.log(str.split('\n').length - 1)

  }
)