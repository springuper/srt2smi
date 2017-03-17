# srt2smi

[![Build Status](https://travis-ci.org/springuper/srt2smi.svg?branch=master)](https://travis-ci.org/springuper/srt2smi)
[![npm version](https://badge.fury.io/js/srt2smi.svg)](https://badge.fury.io/js/srt2smi)

Convert srt format subtitle to smi format.

## Install

```bash
$ npm install srt2smi
```

## Usage

```js
const fs = require('fs');
const srt2smi = require('srt2smi');

const smiContent = srt2smi(fs.readFileSync('a.srt', { encoding: 'utf8' }));
```

## License

MIT.
