Sis.SemesterRoute = Ember.Route.extend({  
  beforeModel: function() {
    if (!this.get('auth.isAuthenticated')) {
      this.transitionTo('home');
    }
  },
  setupController: function(controller, semester) {
    controller.set('model', semester);
    controller.set('selectedProjectVal', null);
  },
  model: function(params) {
    return this.get('store').find('semester', params.semester_id)
  },
})