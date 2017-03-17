const srtParser = require('./srtParser');
const smiFormatter = require('./smiFormatter');

module.exports = srtStr => smiFormatter(srtParser(srtStr));
