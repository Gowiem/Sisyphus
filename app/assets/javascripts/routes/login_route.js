Sis.LoginRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('student', {});
  }
});