Sis.CourseController = Ember.ObjectController.extend({
  selectedProject: null,

  sameAsSelectedCourse: function () {
    debugger
  }.property('auth.currentUser.selectedCourse'),

  nonActiveCourses: function () {
    return this.get('auth.currentUser.courses').filter(function (course, idx) {
      return !(this.get('id')===idx);
    });  
  }.property('auth.currentUser.courses'),
});