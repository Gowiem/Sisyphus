Sis.AbstractSubtaskView = Ember.View.extend({
  didInsertElement: function() {
    // initialize the jQuery datepicker we're using once it's in the dom
    $('.datepicker').datepicker();
  },
});