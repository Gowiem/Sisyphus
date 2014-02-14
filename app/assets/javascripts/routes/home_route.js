Sis.HomeRoute = Ember.Route.extend({  
  model: function() {
    var self;
    if (this.get('auth.currentUser') && this.get('auth.currentUser.isTeacher')) {
      self = this;
      debugger
      return this.store.findAll('semester').then( function(semesters) {
        return null;
      });
      
    }
  },
})