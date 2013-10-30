Sis.NewTaskView = Ember.View.extend({
  content: function() {
    return this.controller.get('content');
  }.property('this.controller.content'),
  didInsertElement: function() {
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
  actions: {
    addNewTask: function() {
      var content = this.get('content'), 
          requiredTask = this.get('parentView').get('controller').get('model');
      this.get('controller').send('createNewSubtask', requiredTask);
    },
    toggleUserSelect: function() {
      var controller = this.get('controller');
      controller.toggleProperty('isShowingUsers');
      if (controller.get('isShowingUsers')) {
        Ember.run.next(this, function() {
          // Setup the click handler to set isShowingUsers to false
          $('body').one('click', function() {
            controller.toggleProperty('isShowingUsers');
          });
          // Make sure the select-users-container doesn't trigger the above event
          $(".select-users-container").click(function(e) {
            e.stopPropagation();
            return true;
          });
        });
      }
    }
  },
})