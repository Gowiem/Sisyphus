Sis.NewSessionsController = Ember.ObjectController.extend({
	needs: ['currentUser'],

	save: function() {
		var self = this;
		this.content.save().then(function() {
			var userJson = self.content.toJSON();
			userJson.id = 'current';
			var object = self.store.load(Sis.User, userJson);
			var user = App.User.find('current');

			self.get('controllers.currentUser').set('content', user);
			self.transitionToRoute('index');
		});
	},

	cancel: function() {
		this.content.deleteRecord();
		this.transitionToRoute('index');
	}
});