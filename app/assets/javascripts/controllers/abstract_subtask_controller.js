Sis.AbstractSubtaskController = Ember.ObjectController.extend({
  // TODO: This is bad design. edit_subtask_controller isn't inheriting the
  // subtask_controller's isEditing property which it should. I could move
  // that property to here, but I think it might be smarter to make this a
  // mixin which both classes use. I should think about this.
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