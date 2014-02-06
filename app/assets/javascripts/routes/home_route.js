Sis.HomeRoute = Ember.Route.extend({  
  beforeModel: function() {
    var self;
    if (this.get('auth.currentUser') && this.get('auth.currentUser.isTeacher')) {
      self = this;
      this.store.find('semester').then(function(semesters) {
        self.transitionTo('semester', semesters.get('firstObject.id'));
      });
    }
  },
})