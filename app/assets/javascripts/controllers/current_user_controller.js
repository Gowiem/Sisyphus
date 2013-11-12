Sis.CurrentUserController = Sis.GroupMemberController.extend({
  isSignedIn: function() {
    return this.get('content') && this.get('content').get('isLoaded');
  }.property('content.isLoaded'),
});