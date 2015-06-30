'use strict';

var assert = require('assert');
var child_process = require('child_process');
var path = require('path');

function escape(arg) {
    return '\'' + arg.replace(/[^\\]'/g, function (match) { return match[0] + '\\\''; }) + '\'';
}

var root = path.resolve(__dirname, '..');
var cmd = 'node ' + escape(path.resolve(root, 'mkr-global.js'));

describe('mkr-global', function () {
    beforeEach(function () {
        process.chdir(root);
    });

    it('no local installation', function (done) {
        process.chdir('test/assets/no');

        child_process.exec(cmd, function (err, stdout, stderr) {
            assert.strictEqual(err.code, 1);
            assert.strictEqual(err.killed, false);
            assert.strictEqual(stdout, '');
            assert.ok(/^mkr-global v\d+\.\d+\.\d+\n/.test(stderr));
            assert.ok(/no local installation/i.test(stderr));
            done();
        });
    });

    it('runs cli() of local installation', function (done) {
        process.chdir('test/assets/dummy');

        child_process.exec(cmd, function (err, stdout, stderr) {
            assert.strictEqual(err, null);
            assert.strictEqual(stdout, 'dummy\n');
            assert.strictEqual(stderr, '');
            done();
        });
    });

    it('broken installation', function (done) {
        process.chdir('test/assets/broken-dummy');

        child_process.exec(cmd, function (err, stdout, stderr) {
            assert.ok(err.code !== 0);
            assert.strictEqual(err.killed, false);
            assert.strictEqual(stdout, '');
            assert.ok(stderr !== '');
            done();
        });
    });
});
