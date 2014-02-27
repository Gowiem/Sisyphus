Sis.EditAccountModalController = Ember.ObjectController.extend({
  // contentCopy used to compare against content to see if user
  // made any changes. Our original content is set in the editAccount action 
  // in the navigation controller.
  contentCopy: null,
  firstNameVal: null,
  lastNameVal: null,

  firstName: function(key, value) {
    if (value) {
      this.set('firstNameVal', value);
      return value;
    } else {
      return this.get('model.firstName');
    }
  }.property('model.firstName'),

  lastName: function(key, value) {
    if (value) {
      this.set('lastNameVal', value);
      return value;
    } else {
      return this.get('model.lastName');
    }
  }.property('model.lastName'),

  resetPasswordFields: function() {
    this.set('password', null);
    this.set('passwordConfirmation', null);
    this.set('currentPassword', null);
  },

	actions: {
    // TODO: Should do some validation on the email, password before allowing
    // a save.
		saveUser: function () {
			var content = this.get('content'),
          firstName = this.get('firstNameVal') || this.get('content.firstName'),
          lastName  = this.get('lastNameVal') || this.get('content.lastName');

      this.set('content.firstName', firstName);
      this.set('content.lastName', lastName);

      this.set('status', null);
      content.save()
        // Success Callback
        .then(function(response) {
          this.set('status', "Successfully updated your account info.");
          this.resetPasswordFields();
        }.bind(this),
        // Error Callback
        function(response) {
          console.log("ERROR - response: ", response);
          this.set('status', "Sorry, there was an error updating your account info. Please try again later.");
        }.bind(this));
		},
	}
});