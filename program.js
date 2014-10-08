fs = require('fs')

var fileType = "." + process.argv[3]

fs.readdir(process.argv[2], function (err, data) {
  console.log(data)
  arr = data
  for (i = 0; i < arr.length; i++) {
    var subArr = arr[i].substring(arr[i].length - (fileType.length + 1), arr.length[i]);
    if (subArr == fileType) {
      console.log(arr[i])
    }
  }
});
