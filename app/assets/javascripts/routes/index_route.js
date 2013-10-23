Sis.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('/projects');
  }
});