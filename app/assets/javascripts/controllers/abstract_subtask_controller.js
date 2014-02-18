Sis.AbstractSubtaskController = Ember.ObjectController.extend({
  needs: ['requiredTasks'],
  isShowingUsers: false,
  userCanSave: false,
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
  savingObserver: function() {
    var hasAssignedStudents = this.get('content.students.length') >= 1,
        hasTitle = this.get('content.title') !== undefined && this.get('content.title') !== '';
    this.set('userCanSave', hasAssignedStudents && hasTitle);
  }.observes('students.length', 'title').on('init'),
});