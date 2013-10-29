Sis.RequiredTaskController = Ember.ObjectController.extend({
  isAddingNewTask: false,
  actions: {
    showNewTask: function() {
      this.set('isAddingNewTask', true);
    },
    cancelNewTask: function() {
      this.set('isAddingNewTask', false);
    }
  }
});