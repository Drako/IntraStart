# IntraStart

This project is a customizable template for intranet startpages.

## Installation

Just clone the repository and install the dependencies
```
# you need grunt-cli installed on your system
npm install -g grunt-cli

git clone https://github.com/Drako/IntraStart
cd IntraStart
npm install
bower install
```

## Usage

```
npm start
```

This will run grunt to minify js files and copy 3rd party js files to their
final location. After that the actual server is started.
You may want to set **NODE_ENV** to 'production' when the page is ready for use.

## LICENSE

Copyright © 2016, Felix Bytow <felix.bytow@autinity.de>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
