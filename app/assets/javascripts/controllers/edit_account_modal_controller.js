Sis.EditAccountModalController = Ember.ObjectController.extend({
	actions: {
		saveUser: function () {
			// Need to refactor at some point, not gauranteed return "promise" 
			var currentUser = this.get('content.content');
			currentUser.set('password', this.get('password'));
			currentUser.set('passwordConfirmation', this.get('passwordConfirmation'));
			currentUser.save();
		},
	}
});