Sis.CourseController = Ember.ObjectController.extend({
  selectedProject: null,

  facultyCourses: function () {
    return this.get('auth.currentUser.courses');
  }.property('auth.currentUser.courses'),
});