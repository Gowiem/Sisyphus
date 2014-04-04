Sis.EditSubtaskController = Sis.AbstractSubtaskController.extend({
  needs: ["subtask", "projectProjectGroup"],
  actions: {
    saveSubtask: function() {
      if (!this.get('userCanSave')) {
        return;
      }
      this.get('model').save().then(function(subtask) {
        Sis.updateHistoryTrackers(subtask.get('projectGroup'));
      });
      this.get('target').set('isEditing', false);
      this.get('target').set('isViewing', true);
      // Make sure to let the project_controller know to check the 'filteredRequiredTasks' 
      // computer property as it may have changed when this subtask was saved.
      this.get('controllers.projectProjectGroup').notifyPropertyChange('filteredRequiredTasks');
    },
    deleteSubtask: function() {
      var subtask = this.get('model');
      subtask.deleteRecord();
      subtask.save();
    }
  }
});