Sis.RequiredTaskController = Sis.TaskController.extend({
  needs: "project",
  addingNewTask: false,
  showCompletedVal: false,
  completedLimboSubtasks: [],
  uncompletedSubtasks: [],

  // Computed Properties
  ///////////////////////

  newSubtask: function() {
    return this.store.createRecord(Sis.Subtask, {});
  }.property(),

  currentSubtasks: function() {
    var showingAllTasks = this.get('controllers.project.showingAllTasks'),
        currentUserSubtaskIds;
    if (showingAllTasks) {
      return this.get('subtasks');
    } else {
      currentUserSubtaskIds = this.get('auth.currentUser.subtasks.@each.id');
      return this.get('subtasks').filter(function(subtask, idx) {
        return currentUserSubtaskIds.contains(subtask.get('id'));
      });
    }
  }.property(),

  completedCount: function() {
    return "(" + this.get('subtasks').filterBy('isCompleted').get('length') + ")";
  }.property('subtasks.@each.isCompleted'),

  showingCompleted: function(key, value) {
    if (value === undefined) {
      var showCompleted = this.get('showCompletedVal');
      // If this required tasks has tasks to show then defer to the showCompleted value
      if (this.get('completedSubtasks.length') > 0) {
        return showCompleted;
      } else {
        // If there are no completed subtasks for this required task then set 
        // showCompletedVal to false since we don't have anything to show anyway. 
        this.set('showCompletedVal', false);
        return false;
      }
    } else {
      this.set('showCompletedVal', value);
      return value;
    }
  }.property('subtasks.@each.isCompleted'),

  uncompletedSubtasks: function() {
    var uncompleted = this.get('currentSubtasks').filterBy('isCompleted', false);
    console.log("SHRED!");
    return uncompleted;
    // this.get('uncompletedSubtasks').addObjects(uncompleted);
  }.property('currentSubtasks.@each.isCompleted'),
  completedSubtasks: function() {
    return this.get('currentSubtasks').filterBy('isCompleted');
  }.property('currentSubtasks.@each.isCompleted'),

  // We should only be showing the 'showCompleted' action if showingCompleted is false
  // and there are actaully completedSubtasks to show. 
  shouldShowCompletedLink: function() {
    if (this.get('completedSubtasks.length') > 0 && this.get('showingCompleted') === false) {
      return true;
    } else {
      return false;
    }
  }.property('completedSubtasks', 'showingCompleted'),

  // Actions
  ///////////
  actions: {
    showCompleted: function() {
      this.set('showingCompleted', true);
    }, 
    hideCompleted: function() {
      this.set('showingCompleted', false);
    },
    showNewTask: function() {
      this.set('addingNewTask', true);
    },
    cancelNewTask: function() {
      this.set('addingNewTask', false);
    }
  }
});