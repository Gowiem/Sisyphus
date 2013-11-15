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
    var totalTasks = this.get('requiredTasks.@each.subtasks').get('length'),
        completedTasks = 0, percentCompleted;
    this.get('requiredTasks').forEach(function(item, idx){
      var numberCompleted = item.get('subtasks').filterBy('isCompleted').get('length');
      completedTasks += numberCompleted;
    });
    percentCompleted = (completedTasks / totalTasks) * 100;
    return "width: " + percentCompleted + "%;";

    // Counldn't figure out what to key this computer propety off of since you 
    // can't chain @each calls like so: 'requiredTasks.@each.subtasks.@each.isCompleted'
    // so for now we'll just fire the propety change event manually when is subtask 
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