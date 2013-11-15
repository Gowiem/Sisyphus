Sis.RegistrationRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user', {});
  }, 
  activate: function() {
    // Reset the registration controller so the user needs to pick their user type agian.
    this.controllerFor('registration').set('hasPickedAUserType', false);
    this.controllerFor('registration').set('userType', null);
  },
  actions: {
    register: function() {
      var userType = this.get('controller.userType');
      this.controllerFor('auth').register(this, userType);
    }, 
    cancel: function() {
      this.transitionTo('home');
    }
  }
});