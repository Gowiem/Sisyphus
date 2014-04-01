Sis.ProjectProjectGroupController = Ember.ObjectController.extend(
  Ember.GoogleAnalyticsTrackingMixin, {
  needs: ['project'],
  showingAllTasks: true,

  groupMembers: function() {
    var currentUserId = this.get('auth.currentUser.id');
    return this.get('model.students').rejectProperty('id', currentUserId);
  }.property('model.students.@each'),

  totalTasksAssigned: function() {
    var subtasks = this.get('model.subtasks');
    if (subtasks) {
      return subtasks.reduce(function(prev, subtask, idx) {
        return prev + subtask.get('students.length');
      }, 0);
    } else {
      return 0;
    }
  }.property('model.subtasks.length'),
  
  filteredRequiredTasks: function() {
    var showingAll = this.get('showingAllTasks'),
        userSubtasks;
    if (showingAll) {
      return this.get('controllers.project.requiredTasks');
    } else {
      userSubtasks = this.get('auth.currentUser.subtasks');
      return userSubtasks.mapBy('parentTask').uniq();
    }
  }.property('controllers.project.requiredTasks', 'showingAllTasks'),

  // Actions
  ///////////
  actions: {
    showAllTasks: function() {
      this.trackEvent('task_filtering', 'showing_all_tasks');
      this.set('showingAllTasks', true);
    },
    showUserTasks: function() {
      this.trackEvent('task_filtering', 'showing_user_tasks');
      this.set('showingAllTasks', false);
    },
  }
});