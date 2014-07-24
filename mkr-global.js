#!/usr/bin/env node
/*jshint node: true */
'use strict';


var localpath = require('path').resolve('node_modules/mkr'),
	mkr;

// only catch exceptions on requiring
try {
	mkr = require(localpath);
} catch (err) {
	process.stderr.write('mkr-global v' + require('./package.json').version + '\n');
	process.stderr.write('no local installation of "mkr" was found (expected at "./node_modules/mkr")\n');
	process.exit(1);
}

// don't catch exceptions on execution
mkr.cli();
