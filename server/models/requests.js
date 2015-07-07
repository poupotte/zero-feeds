// Generated by CoffeeScript 1.9.3
(function() {
  var americano;

  americano = require('americano-cozy');

  module.exports = {
    feed: {
      byTags: function(doc) {
        return emit(doc.tags, doc);
      }
    },
    zfparam: {
      byName: function(doc) {
        return emit(doc.name, doc);
      }
    }
  };

}).call(this);
