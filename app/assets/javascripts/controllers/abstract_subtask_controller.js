Sis.AbstractSubtaskController = Ember.ObjectController.extend({
  needs: ['requiredTasks'],
  isShowingUsers: false,
  date: function(key, value) {
    if (value !== undefined) {
      this.set('content.dueDate', moment(value).toDate());
    }
    if (this.get('content.dueDate')) {
      return moment(this.get('content.dueDate')).format('L');
    } else {
      var newDate = new Date();
      this.set('content.dueDate', newDate);
      return moment(newDate).format('L');
    }
  }.property('content.dueDate'),
  userCanSave: function() {
    var hasAssignedStudents = this.get('content.students.length') >= 1;
    var hasTitle = this.get('content.title') !== undefined && this.get('content.title') !== '';
    return hasAssignedStudents && hasTitle;
  }.property('content.students.length', 'content.title'),
  actions: {
    toggleUserSelect: function() {
      var controller = this;
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
    },
  }
});