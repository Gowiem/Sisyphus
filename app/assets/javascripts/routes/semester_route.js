Sis.SemesterRoute = Ember.Route.extend({  
  beforeModel: function() {
    if (!this.get('auth.isAuthenticated')) {
      this.transitionTo('home');
    }
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('selectedCourseVal', null);
  },
  model: function(params) {
    return this.get('store').find('semester', params.semester_id)
  },
})