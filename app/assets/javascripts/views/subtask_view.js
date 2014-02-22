Sis.SubtaskView = Ember.View.extend({
  didInsertElement: function() {
    this.$(':checkbox').checkbox();
  },
});