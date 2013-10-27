Sis.RequiredTaskController = Ember.ObjectController.extend({
  isAddingNewTask: false,
  isShowingUsers: false,
  selectableStudents: function() {
    var project = this.get('project');
    var projectGroup = project.get('projectGroups').objectAt(0);
    return projectGroup.get('students');
  }.property('project'),
  actions: {
    showNewTask: function() {
      this.set('isAddingNewTask', true);
    }, 
    cancelNewTask: function() {
      this.set('isAddingNewTask', false);
    },
    addNewTask: function() {
      console.log("Add New Task")
    },
    showUserSelect: function() {
      console.log(this.get('selectableStudents'));
      this.set('isShowingUsers', true)
    }
  }
});