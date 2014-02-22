Sis.SubtaskController = Sis.TaskController.extend({
  needs: "project",
  isEditing: false,
  isViewing: false,
  isHovering: false,
  disputeReason: null,

  init: function() {
    // If this model was just created then we set 'isOpen' to true letting us
    // know that we have to start in viewing mode. 
    if (this.get('model.isOpen')) {
      this.set('isViewing', true);
    }
  },

  // Is this subtask in the default state?
  isDefault: function() {
    return !this.get('isViewing') && !this.get('isEditing');
  }.property('isEditing', 'isViewing'),

  // Computed Properties
  ///////////////////////
  disputeModalId: function() {
    return "dispute-modal-" + this.get('content.id');
  }.property('content'),

  isOpenObserver: function() {
    var isOpen = this.get('model.isOpen');
    // If our model is completed then we need to show the completed tasks.
    if (this.get('model.isCompleted') && isOpen) {
      this.get('target').set('showingCompleted', true);
    }
    this.set('isViewing', isOpen);
  }.observes('model.isOpen'),

  isCompleted: function(key, value){
    var model = this.get('model'),
        cancelCompletedKey = model.get('cancelCompletedKey');
    if (value === undefined) {
      return model.get('isCompleted') || model.get('inLimbo');
    } else {
      if (cancelCompletedKey) {
        // If our model has a cancel key then we need to remove it from limbo
        // and add it back to the regular uncompleted tasks.
        this.removeTaskFromLimbo(model, cancelCompletedKey);
        return false;
      } else if (value) {
        // Since we're setting our task to completed we want to give them a
        // second to change their mind, so add the task to the limbo area.
        this.addTaskToLimbo(model);
      } else {
        // We have no cancel key and we're setting the task to uncompleted.
        this.completeTask(model, false);
      }
      return value;
    }
  }.property('model.isCompleted', 'model.inLimbo'),

  addTaskToLimbo: function(model) {
    // Mark the task as inLimbo so it puts a strike through the title
    model.set('inLimbo', true);
    // Queue the task up to be completed in 4 seconds so the user has a chance
    // to cancel their action
    cancelCompletedKey = Ember.run.later(this, function() {
      this.completeTask(model, true);
    }, 6000);
    // Set the result of run#later on our model so if the user undos the 
    // completion then we can cancel the above call via Ember.run#cancel
    model.set('cancelCompletedKey', cancelCompletedKey);
  },

  removeTaskFromLimbo: function(model, cancelKey) {
    // Cancel our Ember.run#later from earlier
    Ember.run.cancel(cancelKey);

    // Null out our cancelCompletedKey and reset the task to uncompleted 
    // and no longer in limbo
    model.setProperties({ 'cancelCompletedKey': null, 'isCompleted': false, 'inLimbo': false, });
  },

  completeTask: function(model, value) {
    var projectGroup = this.get('model.projectGroup');
    model.setProperties({ 'isDisputed': false, 'inLimbo': false,
                          'isCompleted': value , 'cancelCompletedKey': null});

    model.save().then(function() {
      Sis.updateHistoryTrackers(projectGroup);
    });
  },

  // Actions
  ///////////
  actions: {
    toggleViewing: function() {
      if (!this.get('isEditing')) {
        this.toggleProperty('isViewing');
      }
    },
    startEditing: function() {
      this.set('isEditing', true);
    },
    cancelEdit: function() {
      this.set('isEditing', false);
      this.set('isViewing', true);
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