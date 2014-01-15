Sis.GroupMemberController = Ember.ObjectController.extend({
  getProgressBarStyle: function () {
    var totalTasks = this.get('model.subtasks').get('length');
    var completedTasks = this.get('model.subtasks').filter(function (task, idx) {
      return task.get('isCompleted') === true;
    }).get('length');
    var percentCompleted = (completedTasks / totalTasks) * 100;
    return "width: " + percentCompleted + "%;";
  }.property('model.subtasks.@each.isCompleted'),

  // Grab the this group member's index/count from our parent and use it to
  // create the class which styles the color of our progress bar.
  // ex: .group-member-1
  getProgressBarClass: function() {
    var groupMemberCount = this.get('target.groupMemberCount');
    this.set('target.groupMemberCount', groupMemberCount + 1);
    return 'group-member-' + groupMemberCount;
  }.property(),
});