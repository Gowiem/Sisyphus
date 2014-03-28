Sis.ProjectProjectGroupRoute = Ember.Route.extend({
  beforeModel: function() {
    if (!this.get('auth.isAuthenticated')) {
      this.transitionTo('home');
    }
  },
  model: function(params) {
    return this.get('store').find('project_group', params.project_group_id);
  },
});