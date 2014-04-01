Sis.AbstractSubtaskView = Ember.View.extend({
  didInsertElement: function() {
    // initialize the jQuery datepicker we're using once it's in the dom
    $('.datepicker').datepicker();

    // Kind of a hack, but this will correctly place the datepicker on click
    this.$('.datepicker-text-field').on('click', function() {
      $(this).datepicker('place');
    });
  },
});