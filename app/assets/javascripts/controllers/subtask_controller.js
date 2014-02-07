Sis.SubtaskController = Sis.TaskController.extend({
  needs: "project",
  isEditing: false,
  showingDispute: false,
  isHovering: false,
  disputeReason: null,

  // Computed Properties
  ///////////////////////
  disputeModalId: function() {
    return "dispute-modal-" + this.get('content.id');
  }.property('content'),

  isOpen: function() {
    var isOpen = this.get('model.isOpen');
    // If our model is completed then we need to show the completed tasks.
    if (this.get('model.isCompleted') && isOpen) {
      this.get('target').set('showingCompleted', true);
    }
    this.set('isEditing', isOpen);
  }.observes('model.isOpen'),

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      return model.get('isCompleted') || model.get('inLimbo');
    } else {
      // Set this model as undisputed. This is to make sure completed tasks get undisputed. 
      if (value) {
        this.get('target.uncompletedSubtasks').removeObject(model);
        this.get('target.completedLimboSubtasks').addObject(model);
        this.set('model.inLimbo', true);
        Ember.run.later(this, function() {
          this.completeTask(model, value);
        }, 3000);
      } else {
        this.completeTask(model, value);
      }
      return value;
    }
  }.property('model.isCompleted', 'model.inLimbo'),

  completeTask: function(model, value) {
    var self = this;
    model.setProperties({ 'isDisputed': false, 'inLimbo': false, 'isCompleted': value });
    this.get('target.completedLimboSubtasks').removeObject(model);
    model.save().then(function() {
      Sis.updateHistoryTrackers(self.get('model.projectGroup'));
    });
  },

  // Actions
  ///////////
  actions: {
    editTask: function() {
      this.set('isEditing', true);
    },
    cancelEdit: function() {
      this.set('isEditing', false);
      this.set('model.isOpen', false);
    },
    disputeSubtask: function() {
      var modalId = this.get('disputeModalId');
      $('#' + modalId).modal({});
    },

    // TODO: This action is causing scrolling to break on the entire page. Not sure why!
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