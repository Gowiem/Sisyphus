Sis.NavigationController = Ember.ObjectController.extend({
  needs: ['auth', 'application'],
  isAuthenticated: Em.computed.alias("controllers.auth.isAuthenticated"),
  onSignupRoute: function() {
    return this.get('controllers.application.currentPath') === 'registration';
  }.property('controllers.application.currentPath'),
  actions: {
    logout: function() {
      this.get('controllers.auth').logout();
    }
  }
});