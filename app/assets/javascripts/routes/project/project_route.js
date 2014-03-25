Sis.ProjectRoute = Ember.Route.extend({
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
  setupController: function(controller, project) {
    // Setup our model
    controller.set('model', project);

    // Setup the requiredTasks controller
    // TODO: Below seems a bit wonk. Probably not needed.
    this.controllerFor('requiredTasks').set('content', project.get('requiredTasks'));
    this.controllerFor('requiredTasks').set('project', project);
  },
  model: function(params) {
    return this.get('store').find('project', params.project_id);
  },
});