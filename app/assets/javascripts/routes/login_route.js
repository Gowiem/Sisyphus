Sis.LoginRoute = Ember.Route.extend({
  beforeModel: function() {
    var currentUser = this.get('auth.currentUser');
    if (currentUser) {
      if (currentUser.get('isTeacher')) {
        var semesters = this.get('auth.currentUser.semesters');
        this.transitionTo('semester', semesters.get('firstObject'));
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

Sis.StudentLoginRoute = Sis.LoginRoute.extend({
  model: function() {
    return this.store.createRecord('student', {});
  },
});

Sis.TeacherLoginRoute = Sis.LoginRoute.extend({
  model: function() {
    return this.store.createRecord('teacher', {});
  },  
});

