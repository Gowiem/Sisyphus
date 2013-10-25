Sis.RequiredTaskView = Ember.View.extend({
  templateName: "requiredTask",
  actions: {
    newTask: function() {
      var currentlyAdding = this.get('controller').get('isAddingNewTask');
      this.get('controller').set('isAddingNewTask', !currentlyAdding);
    }
  }
});