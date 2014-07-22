# mkr-global
This node module is intended to be installed globally. It provides a global command `mkr` that checks
the current working directory for a local installation of node module [`mkr`](https://www.npmjs.org/package/mkr).
On success it triggers the CLI of the local installation. It's separated from `mkr` to keep the global installation
at a bare minimum, and to allow the use of different versions of `mkr` (project based).
To report a bug or make a feature request please create [a new issue](https://github.com/lrsjng/mkr-global/issues/new).

References: [web](http://larsjung.de/mkr/), [GitHub](https://github.com/lrsjng/mkr-global), [npm](https://www.npmjs.org/package/mkr-global)


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
