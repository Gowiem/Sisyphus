Sis.RequiredTaskView = Ember.View.extend({
  didInsertElement: function() {
    this.addObserver('controller.showingCompleted', this, this.animateCompletedTasks);
  },
  animateCompletedTasks: function() {
    var $completedTasks;
    Ember.run.scheduleOnce('afterRender', this, function() {
      $completedTasks = this.$('.completed-tasks');
      
      // If completed-tasks is still in the dom then we should show/hide it
      if ($completedTasks !== undefined) {
        if (this.get('controller.showingCompleted')) {
          $completedTasks.slideDown('fast');
        } else {
          $completedTasks.slideUp('fast');
        }
      }
    });
  }
});