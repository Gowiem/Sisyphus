Sis.LoginRoute = Ember.Route.extend({
  beforeModel: function() {
    if (this.get('auth.currentUser')) {
      var projects = this.get('auth.currentUser.projects');
      this.transitionTo('project', projects.get('firstObject'));
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

