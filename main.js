var fs = require('fs');

module.exports.createWriteStream = function(path, options)  {
	return fs.createWriteStream(path, options);
};