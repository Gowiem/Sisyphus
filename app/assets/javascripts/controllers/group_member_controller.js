Sis.GroupMemberController = Ember.ObjectController.extend({
  progressBarStyle: function () {
    var totalTasks = this.get('model.subtasks').get('length');
    var completedTasks = this.get('model.subtasks').filter(function (task, idx) {
      return task.get('isCompleted') === true;
    }).get('length');
    var percentCompleted = (completedTasks / totalTasks) * 100;
    return "width:" + percentCompleted + "%;";
  }.property('model.subtasks.@each.isCompleted'),

  // Grab the this group member's index from our model (set in the afterModel
  // hook of our project_route.js) and use it to create the class which styles
  // the color of our progress bar. ex: .group-member-1
  progressBarClass: function() {
    return 'group-member-' + this.get('index');
  }.property(),
});