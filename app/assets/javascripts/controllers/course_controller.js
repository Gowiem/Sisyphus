Sis.CourseController = Ember.ObjectController.extend({
  needs: ['semester'],
  selectedProjectVal: null,

  resetSelectedProject: function(key, value) {
    this.set('selectedProjectVal', null);
  }.observes('content'),

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
  }.property('content.projects.@each.val'),

  nonActiveCourses: function () {
    var id = this.get('id');
    return this.get('auth.currentUser.courses').filter(function (course, idx) {
      return !(id===course.get('id'));
    });
  }.property('auth.currentUser.courses.length', 'content.id'),
  
  emailHref: function() {
    var emails = [];
    var emailStr = "";
    var self = this;
    var returnVal = "";
    this.get('projects').then(function (projects) {
      for (var i=0; i < projects.get('length'); i++) {
        var students = projects.objectAt(i).get('students');
        for (var k=0; k < students.get('length'); k++) {
          emails.push(students.objectAt(k).get('email'));
        }
      }
      for (var m = 0; m < emails.length; m++) {
        emailStr += emails[m] + ",";
      }
      debugger
      // returnVal = "mailto:" + emailStr + "?subject=" + self.get('title') + " on EasyGroupApp.com";
      // return returnVal;
    });
    // return "mailto:" + emailStr + "?subject=" + self.get('title') + " on EasyGroupApp.com";

  }.property('project.students.@each.email'),
});