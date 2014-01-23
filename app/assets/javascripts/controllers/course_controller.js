Sis.CourseController = Ember.ObjectController.extend({
  selectedProjectVal: null,

  selectedProject: function(key, value) {
    if (value === undefined) {      
      var self = this;

      if (this.get('selectedProjectVal')!==null) {
        return this.get('selectedProjectVal');
      } else {          
        return this.get('content.projects').then(function (projects) {
          var project = projects.objectAt(0);
          console.log("project: ", project);
          self.set('selectedProjectVal', project);
          return project;
        });
      }

    } else {
      console.log("value: ", value);
      var project = this.store.find('project', value);
      this.set('selectedProjectVal', project);
      return project;
    }
  }.property('selectedProjectVal'),

  nonActiveCourses: function () {
    var id = this.get('id');
    return this.get('auth.currentUser.courses').filter(function (course, idx) {
      return !(id===course.get('id'));
    });
  }.property('auth.currentUser.courses.length', 'content.id'),
});