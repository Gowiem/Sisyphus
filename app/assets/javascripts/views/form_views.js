Sis.DateField = Ember.TextField.extend({
  type: 'text',
  // Can't figure out how this is supposed to be used. Leaving around in hopes
  // that I'll get it later.
  date: function() {
    var value = this.get('value');
    if (value !== this.get('parentView.controller.content.dueDate')) {
      this.set('parentView.controller.content.dueDate', value || null);
    }
  }.observes('value')
});