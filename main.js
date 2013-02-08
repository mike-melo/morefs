var fs = require('fs'),
	mkdirP = require('./lib/mkdir-p');

module.exports.createWriteStream = function(path, options)  {
	if(path) {
		var lastDirIndex = path.lastIndexOf('/');
		if(lastDirIndex > -1) {
			var dirsToCreate = path.substring(0, lastDirIndex);
			mkdirP(dirsToCreate);
		}
	}
	return fs.createWriteStream(path, options);
};