Sis.NavigationController = Ember.ObjectController.extend({
  needs: ['application'],

  // Computer Properties
  ///////////////////////
  isAuthenticated: Em.computed.alias("auth.isAuthenticated"),
  currentUser: function() {
    return this.get("auth.currentUser"); 
  }.property('auth.currentUser'), 
  onSignupRoute: function() {
    return this.get('controllers.application.currentPath') === 'registration';
  }.property('controllers.application.currentPath'),
  projects: function() {
    if (this.get('isAuthenticated')) {
      return this.store.findAll('project');
    }
  }.property('auth.currentUser.projects'),

  // Actions
  ///////////
  actions: {
    logout: function() {
      this.get('auth').logout();
    },
    // Renders the Edit Account Modal
    editAccount: function() {
      $('#edit-account-modal').modal({});
    },
  }
});