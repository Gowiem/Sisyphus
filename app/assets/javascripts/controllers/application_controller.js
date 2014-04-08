Sis.ApplicationController = Ember.ObjectController.extend({
  onHomeRoute: function() {
    return this.get('currentPath') === 'home';
  }.property('currentPath'),
});