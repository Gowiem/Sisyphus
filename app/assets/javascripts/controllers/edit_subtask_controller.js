Sis.EditSubtaskController = Sis.AbstractSubtaskController.extend({
  needs: ["subtask", "project"],
  actions: {
    saveSubtask: function() {
      this.get('model').save();
      this.get('target').set('isEditing', false);
      this.get('target').set('isViewing', true);
      // Make sure to let the project_controller know to check the 'filteredRequiredTasks' 
      // computer property as it may have changed when this subtask was saved.
      this.get('controllers.project').notifyPropertyChange('filteredRequiredTasks');
    },
    deleteSubtask: function() {
      var subtask = this.get('model');
      subtask.deleteRecord();
      subtask.save();
    }
  }
});