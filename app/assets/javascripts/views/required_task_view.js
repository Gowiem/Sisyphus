Sis.RequiredTaskView = Ember.View.extend({
  didInsertElement: function() {
    this.addObserver('controller.showingCompleted', this, this.animateCompletedTasks);
  },
  animateCompletedTasks: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.$('.completed-tasks').slideToggle('slow');
    });
  }
});