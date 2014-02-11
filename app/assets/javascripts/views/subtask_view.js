Sis.SubtaskView = Ember.View.extend({
  didInsertElement: function() {
    this.$(':checkbox').checkbox();
  },
  mouseEnter: function() {
    var controller = this.get('controller');
    controller.set('isHovering', true);
    if (controller.get('model.isCompleted')) {
      controller.set('showingDispute', true);
    }
  },
  mouseLeave: function() {
    var controller = this.get('controller');
    controller.set('isHovering', false);
    controller.set('showingDispute', false);
  },
});