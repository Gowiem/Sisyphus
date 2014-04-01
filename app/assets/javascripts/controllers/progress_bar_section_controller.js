Sis.ProgressBarSectionController = Sis.GroupMemberController.extend({
  needs: ['projectProjectGroup'],
  progressBarSectionStyle: function() {
    var completedTasks = this.get('model.subtasks').filterBy('isCompleted').get('length'),
        totalTasks = this.get('controllers.projectProjectGroup.totalTasksAssigned');
    return "width:" + ((completedTasks / totalTasks) * 100) + "%;";
  }.property('model.subtasks.@each.isCompleted.length',
    'controllers.projectProjectGroup.totalTasksAssigned'),

  hasCompletedTasks: function() {
    return this.get('model.subtasks').isAny('isCompleted', true);
  }.property('model.subtasks.@each.isCompleted'),
});