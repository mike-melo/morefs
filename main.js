var fs = require('fs'),
	mkdirP = require('./lib/mkdir-p');

module.exports.createWriteStream = function(path, options)  {
	var lastDirIndex = path.lastIndexOf('/');
	var dirsToCreate = path.substring(0, lastDirIndex);
	mkdirP(dirsToCreate);
	return fs.createWriteStream(path, options);
};