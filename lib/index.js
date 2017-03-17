'use strict';

var srtParser = require('./srtParser');
var smiFormatter = require('./smiFormatter');

module.exports = function (srtStr) {
  return smiFormatter(srtParser(srtStr));
};