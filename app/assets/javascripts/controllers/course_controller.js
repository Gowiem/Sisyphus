Sis.CourseController = Ember.ObjectController.extend({
  selectedProject: null,

  nonActiveCourses: function () {
    var id = this.get('id');
    return this.get('auth.currentUser.courses').filter(function (course, idx) {
      return !(id===course.get('id'));
    });
  }.property('auth.currentUser.courses.length'),
});