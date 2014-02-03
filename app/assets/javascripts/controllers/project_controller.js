Sis.ProjectController = Ember.ObjectController.extend({
  projectGroup: null,
  showingAllTasks: true,
  showingProjectDescript: false,

  // Computed Properties
  ///////////////////////
  groupMembers: function() {
    var currentUserId = this.get('auth.currentUser.id');
    return this.get('model.students').rejectProperty('id', currentUserId);
  }.property(),
  
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
      this.set('showingAllTasks', true);
    },
    showUserTasks: function() {
      this.set('showingAllTasks', false);
    },
    showProjectDescript: function() {
      this.set('showingProjectDescript', true);
    },
    hideProjectDescript: function() {
      this.set('showingProjectDescript', false);
    },
  }
});