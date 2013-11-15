Sis.ProjectNavItemController = Ember.ObjectController.extend({
  action: {
    openProject: function() {
      var content = this.get('content');
      this.transitionTo('')
    }
  }
});