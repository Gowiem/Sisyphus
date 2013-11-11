Sis.SubtaskView = Ember.View.extend({
  showingDispute: false,
  mouseEnter: function() {
    if (this.get('controller.model.isCompleted')) {
      this.get('controller').set('showingDispute', true);
    }
  },
  mouseLeave: function() {
    this.get('controller').set('showingDispute', false);
  },
});