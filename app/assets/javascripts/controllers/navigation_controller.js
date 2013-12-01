Sis.NavigationController = Ember.ObjectController.extend({
  needs: ['auth', 'application'],
  isAuthenticated: Em.computed.alias("controllers.auth.isAuthenticated"), 
  currentUser: function() {
    return this.get("controllers.auth.currentUser"); 
  }.property('controllers.auth.currentUser'), 
  onSignupRoute: function() {
    return this.get('controllers.application.currentPath') === 'registration';
  }.property('controllers.application.currentPath'),
  projects: function() {
    return this.store.findAll('project');
  }.property('controllers.auth.currentUser.projects'),

  actions: {
    logout: function() {
      this.get('controllers.auth').logout();
    },

    editAccount: function() {
      $('#edit-account-modal').modal({});
    },
  }
});