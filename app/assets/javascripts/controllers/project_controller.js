Sis.ProjectController = Ember.ObjectController.extend(
  Ember.GoogleAnalyticsTrackingMixin, {
  projectGroup: null,
  showingAllTasks: true,
  showingProjectDescript: false,

  // Computed Properties
  ///////////////////////
  hasDescription: function() {
    return this.get('description') !== null && this.get('description') !== "";
  }.property(),

  groupMembers: function() {
    var currentUserId = this.get('auth.currentUser.id');
    return this.get('model.students').rejectProperty('id', currentUserId);
  }.property(),

  totalTasksAssigned: function() {
    var subtasks = this.get('projectGroup.subtasks');
    if (subtasks) {
      return subtasks.reduce(function(prev, subtask, idx) {
        return prev + subtask.get('students.length');
      }, 0);
    } else {
      return 0;
    }
  }.property('projectGroup.subtasks.length'),
  
  filteredRequiredTasks: function() {
    var showingAll = this.get('showingAllTasks'),
        userSubtasks;
    if (showingAll) {
      return this.get('requiredTasks');
    } else {
      userSubtasks = this.get('auth.currentUser.subtasks');
      return userSubtasks.mapBy('parentTask').uniq();
    }
  }.property('requiredTasks', 'showingAllTasks'),

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
    showProjectDescript: function() {
      this.trackEvent('project_description', 'opened');
      this.set('showingProjectDescript', true);
    },
    hideProjectDescript: function() {
      this.trackEvent('project_description', 'closed');
      this.set('showingProjectDescript', false);
    },
  }
});