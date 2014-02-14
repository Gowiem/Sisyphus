Sis.NewSubtaskView = Sis.AbstractSubtaskView.extend({
  actions: {
    addNewTask: function() {
      var requiredTask = this.get('parentView').get('controller').get('model');
      this.get('controller').send('createNewSubtask', requiredTask);
    },
  },
});