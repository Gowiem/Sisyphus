Sis.GroupMemberController = Ember.ObjectController.extend({
  getProgressBarStyle: function () {
    var totalTasks = this.get('model.subtasks').get('length');
	var completedTasks = this.get('model.subtasks').filter(function (task, idx) {
      return task.get('isCompleted') === true;
    }).get('length');
	var percentCompleted = (completedTasks / totalTasks) * 100;
    return "width: " + percentCompleted + "%;";
  }.property('model.subtasks.@each.isCompleted'),
});