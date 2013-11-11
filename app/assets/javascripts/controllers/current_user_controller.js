Sis.CurrentUserController = Sis.GroupMemberController.extend({
  isSignedIn: function() {
    return this.get('content') != null;
  }.property('content'),
});