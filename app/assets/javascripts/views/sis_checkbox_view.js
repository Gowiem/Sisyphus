Sis.CheckboxView = Ember.Checkbox.extend({
  attributeBindings: ['dataToggle:data-toggle'],
  dataToggle: 'checkbox',
  didInsertElement: function() {
    this.$().checkbox();
  }
});