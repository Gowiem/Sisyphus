Sis.IndexRoute = Ember.Route.extend({
  redirect: function() {
    var currentUser = this.container.lookup('controller:auth').get('currentUser');
    if (currentUser.get('isTeacher')) {
      this.transitionTo('/teachers');
    } else {
      this.transitionTo('/projects');
    }
  }
});