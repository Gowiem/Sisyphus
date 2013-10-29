Sis.RequiredTasksController = Ember.ArrayController.extend({
  needs: 'project',
  selectableStudents: function() {
    var project = this.get('project');
    var projectGroup = project.get('projectGroups').objectAt(0);
    return projectGroup.get('students');
  }.property('project'),
  actions: {}
});