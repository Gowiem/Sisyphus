// For more information see: http://emberjs.com/guides/routing/
Sis.Router.map(function() {
  this.route('projects', { path: '/projects' });
  
  this.route('project', { path: '/projects/:project_id'});
  
  this.resource('users', function() {
  	this.route('new');
  });
  
  this.resource('users', function() {
  	this.route('new');
  	this.route('destroy');
  });

});

Sis.UsersNewRoute = Ember.Route.exted({
	model: function() {
		return Sis.User.createRecord();
	},

	setupController: function(controller, model) {
		controller.set('content', model);
	}
});

Sis.SessionsNewRoute = Ember.Route.extend({
	model: function() {
		return Sis.Session.createRecord();
	},

	setupController: function(controller, model) {
		controller.set('content, model');
	}
});

Sis.SessionDestroyRoute = Ember.Route.extend({
	enter: function() {
		var controller = this.controllerFor('currentUser');
		controller.get('content', undefined);

		Sis.Session.find('current').then(function (session) {
			session.deleteRecord();
			controller.store.commit();
		});

		this.transitionTo('index');
	}
});

Sis.Router.reopen({
  location: 'history'
});
