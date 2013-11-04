Sis.ProjectController = Ember.ObjectController.extend({
  projectGroup: null,

  // Computed Properties
  ///////////////////////

  // Iterate through the students on this project and find the current user. 
  // TODO: We'll most likely need to find the current user prior to this, but 
  // I'm not sure where we need to hook in. We need the currentUser to check the
  // teacher as well and it should be a singleton.
  currentUser: function() {
    var currentUser = this.get('model').get('students').find(function(student, idx) {
      return student.get('currentUser') === true;
    });
    Sis.currentUser = currentUser;
    return currentUser;
  }.property('students', 'teacher'),
  groupMembers: function() {
    return this.get('model.students').filter(function(student, idx) {
      return !student.get('currentUser');
    });
  }.property('students')
});