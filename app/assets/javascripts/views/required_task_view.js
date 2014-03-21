Sis.RequiredTaskView = Ember.View.extend({
  didInsertElement: function() {
    this.addObserver('controller.showingCompleted', this, this.animateCompletedTasks);
  },
  animateCompletedTasks: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      if (this.$('.completed-tasks') !== undefined) {
        this.$('.completed-tasks').slideToggle('slow');
      }
    });
  }
});