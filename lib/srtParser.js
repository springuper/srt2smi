'use strict';

function formatTime(timeStr) {
  var chunks = timeStr.split(':');
  var secondChunks = chunks[2].split(',');
  var hours = parseInt(chunks[0], 10);
  var minutes = parseInt(chunks[1], 10);
  var seconds = parseInt(secondChunks[0], 10);
  var milliSeconds = parseInt(secondChunks[1], 10);

  return ((hours * 60 + minutes) * 60 + seconds) * 1000 + milliSeconds;
}

function parse(str) {
  var lines = str.split(/\r\n|\n|\r/);
  var result = [];
  var item = {
    text: []
  };

  lines.forEach(function (line, index) {
    line = line.trim();

    if (typeof parseInt(line, 10) === 'number' && (index === 0 || lines[index - 1] === '')) {
      // index
      item.index = parseInt(line, 10);
    } else if (line.indexOf(' --> ') > -1) {
      // timestamp
      times = line.split(' --> ');
      item.start = formatTime(times[0]);
      item.end = formatTime(times[1]);
    } else if (line === '') {
      // empty line, reset everything
      item.text = item.text.join('\n');
      result.push(item);
      item = {
        text: []
      };
    } else {
      // text
      item.text.push(line);
    }
  });

  return result;
}

module.exports = parse;