const Backbone = require('backbone');

const Microcache = function() {
  const collection = new Backbone.Collection();
  collection['output'] = function() {
    return [];
  };
  return collection;
};

exports = module.exports = Microcache;