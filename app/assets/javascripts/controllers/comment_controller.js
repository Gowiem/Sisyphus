Sis.CommentController = Ember.ObjectController.extend({
  canDelete: function() {
    return this.get('model.user.id') === Sis.currentUser.id;
  }.property('model.user'),
  actions: {
    deleteComment: function() {
      var comment = this.get('model');
      comment.deleteRecord();
      comment.save();
    }
  }
});