Sis.RegistrationRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('student', {});
  }, 
  actions: {
    register: function() {
      this.controllerFor('auth').register(this);
    }, 
    cancel: function() {
      // TODO: Need homepage
    }
  }
});