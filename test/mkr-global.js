/*jshint node: true */
/*global describe, before, beforeEach, it */


var assert = require('assert');
var child_process = require('child_process');
var path = require('path');
var Q = require('q');

var root = process.cwd();
var cmd = path.resolve(root, 'mkr-global.js');

var exec = function (cmd, options) {

        var deferred = Q.defer();

        child_process.exec(cmd.join(' '), options, function (err, stdout, stderr) {

            if (err) {
                deferred.reject(stderr);
            } else {
                deferred.resolve(stdout);
            }
        });

        return deferred.promise;
    };


describe('mkr-global', function () {

    before(function () {

    });

    beforeEach(function () {

        process.chdir(root);
    });

    it('no local installation', function () {

        process.chdir('test/assets/no');

        return exec(['node', cmd]).then(
            function (out) {

                assert.fail(out, null, 'writes to stdout');
            },
            function (err) {

                assert.ok(/^mkr-global v\d+\.\d+\.\d+\n/.test(err));
                assert.ok(/no local installation/i.test(err));
            }
        );
    });

    it('runs cli() of local installation', function () {

        process.chdir('test/assets/dummy');

        return exec(['node', cmd]).then(
            function (out) {

                assert.strictEqual(out, 'dummy\n');
            },
            function (err) {

                assert.fail(err, null, 'writes to stderr');
            }
        );
    });
});
