Sis.CommentController = Ember.ObjectController.extend({
  canDelete: function() {
    return this.get('model.user.id') === this.get('currentUser.id');
  }.property('model.user'),
  readableCreateAtDate: function() {
    var createdAt = this.get('model.createdAt');
    return moment(createdAt).format('DD/MM hh:mm A');
  }.property('model.createdAt'),
  actions: {
    deleteComment: function() {
      var comment = this.get('model');
      comment.deleteRecord();
      comment.save();
    }
  }
});