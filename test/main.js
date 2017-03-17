const fs = require('fs');
const path = require('path');
const assert = require('assert');
const srt2smi = require('../src');

function compare(inputFile, expectedFile) {
  const actualContent = srt2smi(fs.readFileSync(path.join(__dirname, inputFile), { encoding: 'utf8' }));
  const expectedContent = fs.readFileSync(path.join(__dirname, expectedFile), { encoding: 'utf8' });

  return actualContent.trim() === expectedContent.trim();
}

describe('#srt2smi', () => {
  it('should convert srt content to smi content', () => {
    assert(compare('fixtures/default.srt', 'fixtures/default.smi'));
  });
});
