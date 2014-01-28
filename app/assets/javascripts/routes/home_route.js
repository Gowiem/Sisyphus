Sis.HomeRoute = Ember.Route.extend({  
  beforeModel: function() {
    var self;
    if (this.get('auth.currentUser') && this.get('auth.currentUser.isTeacher')) {
      self = this;
      this.store.find('course').then(function(courses) {
        self.transitionTo('course', courses.get('firstObject.id'));
      });
    }
  },
})