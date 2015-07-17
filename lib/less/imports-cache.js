var cache = {};

module.exports = {
  set: function (key, value) {
    cache[key] = value;
  },
  get: function (key) {
    return cache[key];
  }
};
