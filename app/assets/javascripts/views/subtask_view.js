Sis.SubtaskView = Ember.View.extend({
  didInsertElement: function() {
    this.$(':checkbox').checkbox();
  },
  mouseEnter: function() {
    var controller = this.get('controller');
    controller.set('isHovering', true);
  },
  mouseLeave: function() {
    var controller = this.get('controller');
    controller.set('isHovering', false);
  },
});