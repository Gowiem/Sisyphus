Sis.EditAccountModalController = Ember.ObjectController.extend({
  // contentCopy used to compare against content to see if user
  // made any changes. Our original content is set in the editAccount action 
  // in the navigation controller.
  contentCopy: null,

  resetPasswordFields: function() {
    this.set('password', null);
    this.set('passwordConfirmation', null);
    this.set('currentPassword', null);
  },

	actions: {
    // TODO: Should do some validation on the email, password before allowing
    // a save.
		saveUser: function () {
			var currentContent = this.get('content'),
          contentCopy    = this.get('contentCopy')
          currentJsonString = JSON.stringify(currentContent.toJSON()),
          copyJsonString    = JSON.stringify(contentCopy),
          self = this;
      this.set('status', null);
      if (currentJsonString !== copyJsonString) {
        currentContent.save()
        // Success Callback
        .then(function(response) {
          self.set('status', "Successfully updated your account info.");
          self.set('contentCopy', currentContent.toJSON());
          self.resetPasswordFields();
        // Error Callback
        }, function(response) {
          console.log("ERROR - response: ", response);
          self.set('status', "Sorry, there was an error updating your account info. Please try again later.");
        });
      } else {
        console.log("Content wasn't changed, so not updating");
      }
		},
	}
});