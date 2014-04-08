Sis.NavigationController = Ember.ObjectController.extend({
  needs: ['application', 'editAccountModal'],

  // Computer Properties
  ///////////////////////
  isAuthenticated: Em.computed.alias("auth.isAuthenticated"),
  currentUser: Em.computed.alias("auth.currentUser"),
  currentSemester: null,

  // TODO: These onXRoute CP's can probably move to a handlebars helper.
  onSignupRoute: function() {
    return this.get('controllers.application.currentPath') === 'registration';
  }.property('controllers.application.currentPath'),
  onHomeRoute: Em.computed.alias('controllers.application.onHomeRoute'),

  projectGroups: function() {
    if (this.get('isAuthenticated')) {
      return this.store.findAll('project_group');
    }
  }.property('auth.currentUser'),

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