# mkr-global

[![web][web-img]][web] [![GitHub][github-img]][github] [![npm][npm-img]][npm]  
[![Downloads][npm-dm-img]][npm] [![Dependencies Status][david-img]][david] [![Build Status][travis-img]][travis]

This node module is intended to be installed globally. It provides a global
command `mkr` that checks the current working directory for a local
installation of node module [`mkr`][mkr]. On success it triggers the CLI of
the local installation. It's separated from `mkr` to keep the global
installation at a bare minimum, and to allow the use of different versions of
`mkr` (project based).


## Install

    > npm install -g mkr-global


## License
The MIT License (MIT)

Copyright (c) 2014 Lars Jung (http://larsjung.de)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[web]: http://larsjung.de/mkr/
[github]: https://github.com/lrsjng/mkr-global
[npm]: https://www.npmjs.org/package/mkr-global
[david]: https://david-dm.org/lrsjng/mkr-global
[travis]: https://travis-ci.org/lrsjng/mkr-global

[web-img]: http://img.shields.io/badge/web-larsjung.de/mkr-a0a060.svg?style=flat-square
[github-img]: http://img.shields.io/badge/GitHub-lrsjng/mkr--global-a0a060.svg?style=flat-square
[npm-img]: http://img.shields.io/badge/npm-mkr--global-a0a060.svg?style=flat-square

[npm-v-img]: http://img.shields.io/npm/v/mkr-global.svg?style=flat-square
[npm-dm-img]: http://img.shields.io/npm/dm/mkr-global.svg?style=flat-square
[npm-l-img]: http://img.shields.io/npm/l/mkr-global.svg?style=flat-square
[david-img]: http://img.shields.io/david/lrsjng/mkr-global.svg?style=flat-square
[travis-img]: http://img.shields.io/travis/lrsjng/mkr-global.svg?style=flat-square

[mkr]: https://github.com/lrsjng/mkr
