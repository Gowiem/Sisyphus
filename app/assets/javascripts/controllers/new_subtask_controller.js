Sis.NewSubtaskController = Sis.AbstractSubtaskController.extend({
  needs: ["projectProjectGroup"],
  actions: {
    createNewSubtask: function(requiredTask) {
      var content = this.get('content'),
          projectGroup = this.get('controllers.projectProjectGroup.content'),
          students = content.get('students');
      if (!this.get('userCanSave')) {
        return;
      }
      // TODO: I'm not sure if this is needed or if ember-data will auto-associate the
      // many-to-many relationship on save. Keeping for now.
      students.forEach(function(student, index){
        student.get('subtasks').addObject(content);
      });
      // Set the associated projectGroup and parentTask
      content.set('projectGroup', projectGroup);
      content.set('parentTask', requiredTask);

      this.set('content', this.store.createRecord(Sis.Subtask, {}));

      // Save the new subtask
      content.save().then(function(subtask) {
        subtask.set('isOpen', true);
        Sis.updateHistoryTrackers(projectGroup);
      });
    },
  }
});