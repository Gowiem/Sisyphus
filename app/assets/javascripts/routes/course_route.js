Sis.CourseRoute = Ember.Route.extend({  
  beforeModel: function() {
    if (!this.get('auth.isAuthenticated')) {
      this.transitionTo('home');
    }
  },
  setupController: function(controller, course) {
    controller.set('model', course);
    controller.set('selectedProject', course.get('projects').objectAt(0));
  },
  model: function(params) {
    return this.get('store').find('course', params.course_id);
  },
})