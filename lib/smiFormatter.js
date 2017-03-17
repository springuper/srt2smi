'use strict';

function serialize(data) {
  var result = [];

  result.push('<sami>');

  // header
  result.push('<head>');
  result.push('</head>');

  // body
  result.push('<body>');
  data.forEach(function (cue, index) {
    result.push('<sync start="' + cue.start + '">');
    result.push('<p>' + cue.text.replace('\n', '<br>\n'));

    var nextCue = data[index + 1];
    if (nextCue && nextCue.start === cue.end) return;

    result.push('<sync start="' + cue.end + '">');
    result.push('<p>&nbsp;');
  });
  result.push('</body>');

  result.push('</sami>');

  return result.join('\n');
}

module.exports = serialize;