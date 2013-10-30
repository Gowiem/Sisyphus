Sis.EditSubtaskController = Sis.AbstractSubtaskController.extend({
  needs: "subtask",
  actions: {
    saveSubtask: function() {
      this.get('model').save();
      this.get('target').set('isEditing', false);
    }
  }
});