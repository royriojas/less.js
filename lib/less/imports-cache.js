var cache = { };

module.exports = {
  set: function ( key, value ) {
    cache[ key ] = value;
  },
  get: function ( key ) {
    return cache[ key ];
  },
  replace: function ( _cache ) {
    cache = _cache || { };
  },
  dump: function () {
    return cache;
  },
  removeEntries: function ( key ) {
    if ( !Array.isArray( key ) ) {
      key = [ key ];
    }
    key.forEach( function ( entry ) {
      delete cache[ entry ];
    } );
  }
};
