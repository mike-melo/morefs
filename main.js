var fs = require('fs');

module.exports.createWriteStream = function(path, options)  {
	fs.createWriteStream(path, options);
};