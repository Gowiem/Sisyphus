Sis.ProjectRoute = Ember.Route.extend({
  beforeModel: function() {
    if (!this.get('auth.isAuthenticated')) {
      this.transitionTo('home');
    }
  },
  setupController: function(controller, project) {
    // Setup our model and projectGroup on the projectController as we only have one. 
    controller.set('model', project);
    controller.set('projectGroup', project.get('projectGroups').objectAt(0));

    // Setup the requiredTasks controller
    this.controllerFor('requiredTasks').set('content', project.get('requiredTasks'));
    this.controllerFor('requiredTasks').set('project', project);

    // Setup the newTask controller with a new instance of a subtask
    this.controllerFor('newTask').set('content', this.store.createRecord(Sis.Subtask, {}));
  },
  model: function(params) {
    return this.get('store').find('project', params.project_id);
  },
});