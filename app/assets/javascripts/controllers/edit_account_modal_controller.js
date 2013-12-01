Sis.EditAccountModalController = Ember.ObjectController.extend({
	actions: {
		saveUser: function () {
			// Need to refactor at some point, not gauranteed return "promise" 
			this.get('content.content').save();
		},
	}
});