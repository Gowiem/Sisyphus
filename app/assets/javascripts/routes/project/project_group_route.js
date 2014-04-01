Sis.ProjectProjectGroupRoute = Ember.Route.extend({
  beforeModel: function() {
    if (!this.get('auth.isAuthenticated')) {
      this.transitionTo('home');
    }
  },
  afterModel: function(model) {
    model.get('students').forEach(function(student, idx) {
      student.set('index', idx);
    });
  },
  model: function(params) {
    return this.get('store').find('project_group', params.project_group_id);
  },
});