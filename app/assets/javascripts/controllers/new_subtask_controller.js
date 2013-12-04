Sis.NewSubtaskController = Sis.AbstractSubtaskController.extend({
  needs: ["project"],
  actions: {
    createNewSubtask: function(requiredTask) {
      var content = this.get('content'),
          projectController = this.get('controllers.project'),
          students = content.get('students');
      // TODO: I'm not sure if this is needed or if ember-data will auto-associate the
      // many-to-many relationship on save. Keeping for now.
      students.forEach(function(student, index){
        student.get('subtasks').addObject(content);
      });
      // Set the associated projectGroup and parentTask
      content.set('projectGroup', projectController.get('projectGroup'));
      content.set('parentTask', requiredTask);
      // Save the new subtask
      content.save();
      this.set('content', this.store.createRecord(Sis.Subtask, {}));
    },
  }
});