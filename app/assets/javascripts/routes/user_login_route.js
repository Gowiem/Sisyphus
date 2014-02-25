Sis.UserLoginRoute = Ember.Route.extend({
  beforeModel: function() {
    var currentUser = this.get('auth.currentUser');
    if (currentUser) {
      if (currentUser.get('isTeacher')) {
        this.transitionTo('teachers');
      } else {
        var projects = this.get('auth.currentUser.projects');
        this.transitionTo('project', projects.get('firstObject'));
      }
    }
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('errorMsg', "");
  },
  model: function() {
    return this.store.createRecord('user', {});
  },
  actions: {
    login: function() {
      this.get('controller').updateEmailCookie();
      this.controllerFor('auth').login(this);
    },
    cancel: function() {
      this.transitionTo('home');
    }
  }
});

// Sis.StudentLoginRoute = Sis.LoginRoute.extend({
//   model: function() {
//     return this.store.createRecord('student', {});
//   },
// });
// Sis.TeacherLoginRoute = Sis.LoginRoute.extend({
//   model: function() {
//     return this.store.createRecord('teacher', {});
//   },  
// });

