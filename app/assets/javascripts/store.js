// https://github.com/emberjs/data/blob/master/TRANSITION.md#rest-adapter-and-serializer-configuration

Sis.ApplicationAdapter = DS.ActiveModelAdapter.extend({});

Sis.ApplicationSerializer = DS.ActiveModelSerializer.extend({
  // This is solution for embedding entire objects into save response. 
  // I couldn't get this solution to save the relationships on the rails side, 
  // so the below solution of including ids is what we're going with.
  // 'attrs': {
  //   'students': { embedded: 'always'},
  // },
  // Below is solution to only include ids for saving hasMany relationships
  // I adapted this from here: http://dbushell.com/2013/04/25/ember-data-and-mongodb/
  serializeHasMany: function(record, json, relationship) {
    var key = relationship.key,
        jsonKey = Ember.String.singularize(key) + '_ids';
    json[jsonKey] = [];
    record.get(key).forEach(function(item) {
        json[jsonKey].push(item.get('id'));
    });
    return json;
  }
});
