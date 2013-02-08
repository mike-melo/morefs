var assert = require('assert'),
	fixture = require('./../main'),
	fs = require('fs'),
	rm = require('rimraf'),
	testOutPath = process.env.PWD + '/test-out';

var assertFileOnDisk = function(path) {
	assert.ok(fs.existsSync(path), path + ' wasn\'t found');
};

var cleanTestOutput = function(done) {
	fs.exists(testOutPath, function(exists) {
		if(exists) {
			rm(testOutPath, function(err){
				done();
			});							
		} else {
			done();
		}
	});
};

suite('createWriteStream', function() {
	
	teardown(function(done){
		cleanTestOutput(done);	
	});
	
	test('creates all subdirectories', function(done) {
		fixture.createWriteStream(testOutPath + '/dir1/dir2/file').write('contents');
		assertFileOnDisk(testOutPath + '/dir1/dir2/file');
		done();
	});
	
});

	
