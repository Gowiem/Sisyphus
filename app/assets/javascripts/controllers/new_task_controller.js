Sis.NewTaskController = Ember.ObjectController.extend({
  needs: ["requiredTasks", "project"],
  isShowingUsers: false,
  actions: {
    createNewSubtask: function(requiredTask) {
      var content = this.get('content'),
          projectController = this.get('controllers.project');
      content.set('project', projectController.get('model'));
      content.set('projectGroup', projectController.get('projectGroup'));
      content.set('parentTask', requiredTask);
      if (content) { // Theres someway to validate forms here, but I'm not sure how
        content.save();
      } else {
        console.log('Some error with content: ', content);
      }
    },
  }
});