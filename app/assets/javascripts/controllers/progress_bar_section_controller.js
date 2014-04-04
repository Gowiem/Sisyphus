Sis.ProgressBarSectionController = Sis.GroupMemberController.extend({
  needs: ['projectProjectGroup'],
  allSubtasksCompleted: Ember.computed.alias('controllers.projectProjectGroup.allSubtasksCompleted'),

  progressBarSectionStyle: function() {
    var completedTasks = this.get('model.completedSubtasks'),
        totalTasks = this.get('controllers.projectProjectGroup.totalTasksAssigned');
    return "width:" + ((completedTasks / totalTasks) * 100) + "%;";
  }.property('model.completedSubtasks', 'controllers.projectProjectGroup.totalTasksAssigned'),

  hasCompletedTasks: function() {
    return this.get('model.currentSubtasks').isAny('isCompleted', true);
  }.property('model.currentSubtasks.@each.isCompleted'),
});