Sis.NavigationController = Ember.ObjectController.extend({
  needs: "auth",
  isAuthenticated: Em.computed.alias("controllers.auth.isAuthenticated"),
  actions: {
    logout: function() {
      console.log("User is logging out.");
      this.get('controllers.auth').logout();
    }
  }
});