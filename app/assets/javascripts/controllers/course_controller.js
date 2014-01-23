Sis.CourseController = Ember.ObjectController.extend({
  selectedProjectVal: null,

  selectedProject: function(key, value) {
    if (value === undefined) {      
      var self = this;
      this.get('content.projects').then(function (projects) {
        var project = projects.objectAt(0)
        self.set('selectedProjectVal', project);
        return project;
      });
    } else {
      this.set('selectedProjectVal', value);
      return value;
    }
  }.property(),

  nonActiveCourses: function () {
    var id = this.get('id');
    return this.get('auth.currentUser.courses').filter(function (course, idx) {
      return !(id===course.get('id'));
    });
  }.property('auth.currentUser.courses.length', 'content.id'),
});