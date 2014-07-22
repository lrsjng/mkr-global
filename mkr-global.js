#!/usr/bin/env node
/*jshint node: true */
'use strict';


var localpath = require('path').resolve('node_modules/mkr'),
	mkr;

// only catch exceptions on requiring
try {
	mkr = require(localpath);
} catch (err) {
	process.stderr.write('[err] no local installation of "mkr" was found\n[err] expected at "' + localpath + '"\n');
	process.exit(1);
}

// don't catch exceptions on execution
mkr.cli();
