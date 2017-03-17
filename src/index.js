const srtParser = require('./srtParser');
const smiFormatter = require('./smiFormatter');

module.exports = (srtStr) => {
  return smiFormatter(srtParser(srtStr));
};
