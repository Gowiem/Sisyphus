Sis.RequiredTaskController = Sis.TaskController.extend(
  Ember.GoogleAnalyticsTrackingMixin, {
  needs: "projectProjectGroup",
  addingNewTask: false,
  showCompletedVal: false,
  showingAllTasks: Ember.computed.alias('controllers.projectProjectGroup.showingAllTasks'),

  init: function() {
    this.set('completedLimboSubtasks', Ember.A());
  },

  // Computed Properties
  ///////////////////////
  newSubtask: function() {
    return this.store.createRecord(Sis.Subtask, {});
  }.property(),

  currentSubtasks: function() {
    var showingAllTasks = this.get('showingAllTasks'),
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
    if (this.get('showingAllTasks')) {
      return this.get('subtasks').filterBy('isCompleted').get('length');
    } else {
      return this.get('auth.currentUser.subtasks').filterBy('isCompleted').get('length');
    }
  }.property('subtasks.@each.isCompleted', 'showingAllTasks'),

  showingCompleted: function(key, value) {
    if (value === undefined) {
      // If this required tasks has tasks to show then defer to the showCompleted value
      if (this.get('completedSubtasks.length') > 0) {
        return this.get('showCompletedVal');
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

  subtaskWasOpened: function() {
    var isOpenSubtask = this.get('subtasks').findBy('isOpen', true);
    if (isOpenSubtask && isOpenSubtask.get('isCompleted')) {
      this.set('showingCompleted', true);
    }
  }.observes('subtasks.@each.isOpen'),

  uncompletedSubtasks: function() {
    return this.get('currentSubtasks').filterBy('isCompleted', false);
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
      this.trackEvent('completed_tasks', 'showing_completed');
    },
    hideCompleted: function() {
      this.set('showingCompleted', false);
      this.trackEvent('completed_tasks', 'hiding_completed');
    },
    showNewTask: function() {
      this.set('addingNewTask', true);
      this.trackEvent('new_tasks', 'adding_new_task');
    },
    cancelNewTask: function() {
      this.set('addingNewTask', false);
      this.trackEvent('new_tasks', 'canceled_adding_new_task');
    }
  }
});