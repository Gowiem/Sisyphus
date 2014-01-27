Sis.NavigationController = Ember.ObjectController.extend({
  needs: ['application', 'editAccountModal'],

  // Computer Properties
  ///////////////////////
  isAuthenticated: Em.computed.alias("auth.isAuthenticated"),
  currentUser: Em.computed.alias("auth.currentUser"),
  onSignupRoute: function() {
    return this.get('controllers.application.currentPath') === 'registration';
  }.property('controllers.application.currentPath'),

  projects: function() {
    if (this.get('isAuthenticated')) {
      return this.store.findAll('project');
    }
  }.property('auth.currentUser'),

  uniqueSemesters: function() {
    if (this.get('isAuthenticated')) {
      return this.get('currentUser.courses').mapBy('semester').uniq();
    }
  }.property('currentUser.courses.length'),

  // Actions
  ///////////
  actions: {
    logout: function() {
      this.get('auth').logout();
    },
    // Renders the Edit Account Modal
    editAccount: function() {
      var currentUser = this.get('auth.currentUser'),
          editAccountController = this.get('controllers.editAccountModal');

      // Set our editAccountController's content so it's fresh each time.
      editAccountController.set('content', currentUser);
      editAccountController.set('contentCopy', currentUser.toJSON());

      $('#edit-account-modal').modal({});
    },
  }
});