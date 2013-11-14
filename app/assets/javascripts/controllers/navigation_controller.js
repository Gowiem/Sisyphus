Sis.NavigationController = Ember.ObjectController.extend({
  needs: "auth",
  isAuthenticated: Em.computed.alias("controllers.auth.isAuthenticated"),
  actions: {
    logout: function() {
      this.get('controllers.auth').logout();
    }
  }
});