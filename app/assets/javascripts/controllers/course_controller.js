Sis.CourseController = Ember.ObjectController.extend({
  selectedProjectVal: null,

  selectedProject: function(key, value) {
    if (value === undefined) {
      if (this.get('selectedProjectVal') !== null) {
        return this.get('selectedProjectVal');
      } else {
        this.set('selectedProjectVal', this.get('content.projects.firstObject'));
        return this.get('content.projects.firstObject');
      }
    } else {
      this.set('selectedProjectVal', value);
      return value;
    }
  }.property('selectedProjectVal', 'content.projects.@each', 'content.courses'),

  nonActiveCourses: function () {
    var id = this.get('id');
    return this.get('auth.currentUser.courses').filter(function (course, idx) {
      return !(id===course.get('id'));
    });
  }.property('auth.currentUser.courses.length', 'content.id'),
});