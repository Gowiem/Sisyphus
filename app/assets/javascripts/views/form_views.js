Sis.DateField = Ember.TextField.extend({
  type: 'text',
  // Can't figure out how this is supposed to be used. Leaving around in hopes
  // that I'll get it later.
  date: function() {
    var value = this.get('value');
    if (value) {
      return new Date(value);
    } else {
      return null;
    }
  }.property('value')
});