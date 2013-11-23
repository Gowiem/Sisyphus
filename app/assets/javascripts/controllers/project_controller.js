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

  progressBarSize: function() {
    var totalTasks = 0,
        completedTasks = 0, 
        percentCompleted;
    // Loop through the requiredTasks to find the count of the overall and 
    // completed subtasks
    this.get('requiredTasks').forEach(function(item, idx){
      var overallCount = item.get('subtasks.length');
      var completedCount = item.get('subtasks').filterBy('isCompleted').get('length');
      totalTasks += overallCount;
      completedTasks += completedCount;
    });
    percentCompleted = (completedTasks / totalTasks) * 100;
    return "width: " + percentCompleted + "%;";

    // Counldn't figure out what to key this computer propety off of since you 
    // can't chain @each calls like so: 'requiredTasks.@each.subtasks.@each.isCompleted'
    // so for now we'll just fire the propety change event manually when subtask 
    // is completed/uncompleted. 
  }.property(), 

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