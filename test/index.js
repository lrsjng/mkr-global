const child_process = require('child_process');
const path = require('path');
const {test, assert} = require('scar');

const escape = arg => '\'' + arg.replace(/[^\\]'/g, match => match[0] + '\\\'') + '\'';

const root = path.resolve(__dirname, '..');
const cmd = 'node ' + escape(path.resolve(root, 'mkr-global.js'));

test('mkr-global no local installation', () => {
    return new Promise(resolve => {
        process.chdir(root);
        process.chdir('test/assets/no');

        child_process.exec(cmd, (err, stdout, stderr) => {
            assert.equal(err.code, 1);
            assert.equal(err.killed, false);
            assert.equal(stdout, '');
            assert.ok((/^mkr-global v\d+\.\d+\.\d+\n/).test(stderr));
            assert.ok((/no local installation/i).test(stderr));
            resolve();
        });
    });
});

test('mkr-global runs cli() of local installation', () => {
    return new Promise(resolve => {
        process.chdir(root);
        process.chdir('test/assets/dummy');

        child_process.exec(cmd, (err, stdout, stderr) => {
            assert.equal(err, null);
            assert.equal(stdout, 'dummy\n');
            assert.equal(stderr, '');
            resolve();
        });
    });
});

test('mkr-global broken installation', () => {
    return new Promise(resolve => {
        process.chdir(root);
        process.chdir('test/assets/broken-dummy');

        child_process.exec(cmd, (err, stdout, stderr) => {
            assert.ok(err.code !== 0);
            assert.equal(err.killed, false);
            assert.equal(stdout, '');
            assert.ok(stderr !== '');
            resolve();
        });
    });
});

test.cli();
