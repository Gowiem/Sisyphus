Sis.ProjectController = Ember.ObjectController.extend({
  projectGroup: null,
  showingAllTasks: true,

  // Computed Properties
  ///////////////////////
  groupMembers: function() {
    return this.get('model.students').filter(function(student, idx) {
      return !student.get('currentUser');
    });
  }.property('students'),
  filteredRequiredTasks: function() {
    var showingAll = this.get('showingAllTasks'),
        userSubtasks;
    if (showingAll) {
      return this.get('requiredTasks');
    } else {
      userSubtasks = this.get('currentUser.subtasks');
      console.log("userSubtasks: ", userSubtasks);
      return userSubtasks.mapBy('parentTask');
    }
  }.property('requiredTasks', 'showingAllTasks'),

  // Actions
  ///////////
  actions: {
    showAllTasks: function() {
      this.set('showingAllTasks', true);
    },
    showUserTasks: function() {
      this.set('showingAllTasks', false);
    },
  }
});