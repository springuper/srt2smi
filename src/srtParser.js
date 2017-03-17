function formatTime(timeStr) {
  const chunks = timeStr.split(':');
  const secondChunks = chunks[2].split(',');
  const hours = parseInt(chunks[0], 10);
  const minutes = parseInt(chunks[1], 10);
  const seconds = parseInt(secondChunks[0], 10);
  const milliSeconds = parseInt(secondChunks[1], 10);

  // eslint-disable-next-line no-mixed-operators
  return (((hours * 60 + minutes) * 60) + seconds) * 1000 + milliSeconds;
}

function parse(str) {
  const lines = str.split(/\r\n|\n|\r/);
  const result = [];
  let item = {
    text: [],
  };

  lines.forEach((line, index) => {
    const lineContent = line.trim();

    if (typeof parseInt(lineContent, 10) === 'number' && (index === 0 || lines[index - 1] === '')) {
      // index
      item.index = parseInt(lineContent, 10);
    } else if (lineContent.indexOf(' --> ') > -1) {
      // timestamp
      const times = lineContent.split(' --> ');
      item.start = formatTime(times[0]);
      item.end = formatTime(times[1]);
    } else if (lineContent === '') {
      // empty line, reset everything
      item.text = item.text.join('\n');
      result.push(item);

      item = {
        text: [],
      };
    } else {
      // text
      item.text.push(lineContent);
    }
  });

  return result;
}

module.exports = parse;
