Sis.IndexRoute = Ember.Route.extend({
  redirect: function() {
    var currentUser = this.container.lookup('controller:auth').get('currentUser');
    if (currentUser === null) {
      this.transitionTo('/login');
    } else {
      this.transitionTo('home');
    }
  }
});