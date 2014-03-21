Sis.FacultyProjectGroupController = Ember.ObjectController.extend({

  progressBarStyle: function () {
    var totalTasks = this.get('model.subtasks').get('length');
    var completedTasks = this.get('model.subtasks').filter(function (task, idx) {
      return task.get('isCompleted') === true;
    }).get('length');
    var percentCompleted = (completedTasks / totalTasks) * 100;
    return "width:" + percentCompleted + "%;";
  }.property('model.subtasks.@each.isCompleted'),

  emailHref: function() {
    debugger
    var emails = "";
    this.get('students').forEach(function (item, index, enumerable) {
      emails += item.get('email') + ",";
    });
    return "mailto:" + emails + "?subject=" + "test subject" + " on EasyGroupApp.com";
  }.property('students.@each.email'),

});