Sis.RegistrationRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('student', {});
  }, 
  activate: function() {
    // Reset the registration controller so the user needs to pick their user type agian.
    this.controllerFor('registration').set('hasPickedAUserType', false);
    this.controllerFor('registration').set('userType', null);
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