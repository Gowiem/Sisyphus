Sis.EditAccountModalController = Ember.ObjectController.extend({
  init: function() {
    this.set('content', this.get('auth.currentUser'));
  },
	actions: {
		saveUser: function () {
			var currentUser = this.get('content');
			currentUser.set('password', this.get('password'));
			currentUser.set('passwordConfirmation', this.get('passwordConfirmation'));
			currentUser.save();
		},
	}
});