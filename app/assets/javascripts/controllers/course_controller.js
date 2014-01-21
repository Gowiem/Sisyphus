Sis.CourseController = Ember.ObjectController.extend({
  selectedProject: null,
  theteacher:null,

  facultyCourses: function () {
    var currentUser = this.get('auth.currentUser');
    var courses = currentUser.get('courses');
    
  }
});