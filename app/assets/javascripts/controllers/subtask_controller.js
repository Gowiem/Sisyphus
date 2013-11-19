Sis.SubtaskController = Ember.ObjectController.extend({
  needs: "project",
  isEditing: false,
  showingDispute: false,
  disputeReason: null,

  disputeModalId: function() {
    return "dispute-modal-" + this.get('content.id');
  }.property('content'),

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      return model.get('isCompleted');
    } else {
      // Set this model as undisputed. This is to make sure completed tasks get undisputed. 
      model.set('isDisputed', false);

      model.set('isCompleted', value);
      model.save();
      this.get('controllers.project').notifyPropertyChange('progressBarSize');
      return value;
    }
  }.property('model.isCompleted'),
  readableDate: function() {
    var dueDate = this.get('model.dueDate');
    return dueDate ? moment(dueDate).calendar() : null;
  }.property('model.dueDate'),

  // Actions
  actions: {
    editTask: function() {
      this.set('isEditing', true);
    },
    cancelEdit: function() {
      this.set('isEditing', false);
    },
    disputeSubtask: function() {
      var modalId = this.get('disputeModalId');
      $('#' + modalId).modal({});
    },
    submitDisputed: function() {
      var subtask = this.get('model'),
          disputeComment = this.store.createRecord(Sis.Comment, {}),
          disputeReason = this.get('disputeReason'),
          modalId = this.get('disputeModalId'),
          user = this.get('auth.currentUser');

      // Create the new comment which disputes this subtask being completed.
      // currentUser.model returns a promise so we need to wrap the save in this 'then'
      disputeComment.set('isDisputed', true);
      disputeComment.set('body', disputeReason);
      disputeComment.set('subtask', subtask);
      disputeComment.set('student', user);
      disputeComment.save();

      // Set this subtask as disputed, not completed, add the new comment, and save.
      subtask.set('isDisputed', true);
      subtask.set('isCompleted', false);
      subtask.get('comments').pushObject(disputeComment);
      subtask.save();

      // Reset the disputeReason and hide the modal
      this.set('disputeReason', null);
      $('#' + modalId).modal('hide');
    },
  }
});