Sis.IndexRoute = Ember.Route.extend({
  redirect: function() {
    var currentUser = this.container.lookup('controller:currentUser').get('content');
    if (currentUser.get('isTeacher')) {
      this.transitionTo('/teachers');
    } else {
      this.transitionTo('/projects');
    }
  }
});