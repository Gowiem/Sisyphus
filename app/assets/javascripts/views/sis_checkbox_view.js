Sis.CheckboxView = Ember.Checkbox.extend({
  attributeBindings: ['dataToggle:data-toggle'],
  dataToggle: 'checkbox',
  didInsertElement: function() {
    this.$().checkbox();
    // Stop the event from bubbling up to subtask so the open/close action
    // isn't triggered
    this.$().parent('.checkbox-label').on('click', function(event) {
      event.stopPropagation();
    });
  }
});