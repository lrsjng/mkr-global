#!/usr/bin/env node
/*jshint node: true */
'use strict';


var version = require('./package.json').version,
	mkrpath = require('path').resolve('node_modules/mkr'),
	mkr;

// only catch exceptions on requiring
try {
	mkr = require(mkrpath);
} catch (err) {
	if (err.code === 'MODULE_NOT_FOUND' && err.message.indexOf(mkrpath) >= 0) {
		process.stderr.write('mkr-global v' + version + '\n');
		process.stderr.write('no local installation of "mkr" was found (expected at "./node_modules/mkr")\n');
		process.exit(1);
	}
	throw err;
}

// don't catch exceptions on execution
mkr.cli();
