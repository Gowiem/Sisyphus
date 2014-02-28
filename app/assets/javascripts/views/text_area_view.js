Sis.TextAreaView = Ember.TextArea.extend({
  click: function(event) {
    this._super();
    event.stopPropagation();
  }
});