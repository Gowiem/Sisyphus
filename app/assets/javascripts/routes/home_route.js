Sis.HomeRoute = Ember.Route.extend({  
  model: function() {
    var self;
    if (this.get('auth.currentUser') && this.get('auth.currentUser.isTeacher')) {
      self = this;
      this.store.findAll('semester').then( function(semesters) {
        self.get('controllers.navigation').then(function(navController) {
          navController.set('currentSemester', semesters.get('firstObject'));
          route.transitionTo('semester', semesters.get('firstObject'));
        });
      });      
    }
  },
})