Sis.AbstractSubtaskView = Ember.View.extend({
  didInsertElement: function() {
    // initialize the jQuery datepicker we're using once it's in the dom
    $('.datepicker').datepicker();
  },
  // Overrides Ember.Checkbox to add the checked student to this content
  userCheckbox: Em.Checkbox.extend({
    checkedObserver: function(){
      var content = this.get('controller').get('content')
      if(this.get('checked')) {
        content.get('students').pushObject(this.get('student'));
      } else {
        content.get('students').removeObject(this.get('student'));
      }
    }.observes('checked')
  }),
});