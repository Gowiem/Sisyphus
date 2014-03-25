Sis.HomeRoute = Ember.Route.extend({  
  needs: ['navigation'],

  model: function() {
    console.log("Model, HomeRoute");
    if (this.get('auth.currentUser') && this.get('auth.currentUser.isTeacher')) {
      return this.store.findAll('semester');   
    }
  },

  setupController: function (controller, model) {
    if (model != null) {
      console.log('setupController, HomeRoute');
      // this.set('currentSemester', model.get('firstObject'));
      // this.transitionTo('semester', model.get('firstObject'));
    }
  }
})