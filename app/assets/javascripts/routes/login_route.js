Sis.LoginRoute = Ember.Route.extend({
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
      this.transitionTo('home');
    }
  }
});

Sis.StudentLoginRoute = Sis.LoginRoute.extend({});
Sis.TeacherLoginRoute = Sis.LoginRoute.extend({});

