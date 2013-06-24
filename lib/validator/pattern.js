var rules = require('../rule');

/**
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 */
var pattern = function(rule, value, callback, source) {
  var errors = [];
  rules.pattern(rule, value, source, errors);
  callback(errors);
}

module.exports = pattern;