Sis.LoginRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('student', {});
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('errorMsg', "");
  },
  actions: {
    login: function() {
      this.controllerFor('auth').login(this);
    },
    cancel: function() {
      console.log("Cancelling login, TODO: Create a home page which gives logins for both user types and a description of the project.");
      // Should redirect to a home page, which we dont have. 
    }
  }
});

Sis.StudentLoginRoute = Sis.LoginRoute.extend({});
Sis.TeacherLoginRoute = Sis.LoginRoute.extend({});

