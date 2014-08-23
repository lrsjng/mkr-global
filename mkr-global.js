#!/usr/bin/env node
/*jshint node: true */
'use strict';


var pkg = require('./package.json');
var mkrpath = require('path').resolve('node_modules/mkr');
var mkr;

// only catch exceptions on requiring
try {
    mkr = require(mkrpath);
} catch (err) {
    if (err.code === 'MODULE_NOT_FOUND' && err.message.indexOf(mkrpath) >= 0) {
        process.stderr.write(pkg.name + ' v' + pkg.version + '\n' + pkg.description + '\n\n');
        process.stderr.write('No local installation of "mkr"! (expected "./node_modules/mkr")\n');
        process.exit(1);
    }
    throw err;
}

// don't catch exceptions on execution
mkr.cli();
