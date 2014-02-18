Sis.CourseRoute = Ember.Route.extend({  
  beforeModel: function() {
    console.log("hitting course route!!");
    if (!this.get('auth.isAuthenticated')) {
      this.transitionTo('home');
    }
  },
  setupController: function(controller, course) {
    console.log("hitting course route!!");
    // Set selected project to NULL when switching courses
     controller.set('selectedProjectVal', null);
     controller.set('model', course);
  },
  model: function(params) {
    console.log("hitting course route!!");
    return this.get('store').find('course').then(function(courses) {
      return courses.findBy('id', params.course_id);
    });
  },
})