var fs = require("fs")

filterRun = function(directory, extension, callback){
	fs.readdir(directory, function(error, data){
		if (error){
			return callback(error)
		}

		else {

			extension = "." + extension
			arr = data
			var secondArr = []
			  for (i = 0; i < arr.length; i++) {
			    var subArr = arr[i].substring(arr[i].length - (extension.length), arr[i].length);
			    if (subArr == extension) {
			      secondArr.push(arr[i])
			    };
			  }
			secondArr.forEach(function(logUnit){
				callback(null, logUnit);
			});
		}

		});
};

module.exports = filterRun;