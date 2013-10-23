Sis.ProjectRoute = Ember.Route.extend({
  setupController: function(controller, project) {
    controller.set('model', project);
    controller.set('projectGroup', project.get('projectGroups').objectAt(0));
  },
  model: function(params) {
    return this.get('store').find('project', params.project_id);
  },
});