Sis.CommentController = Ember.ObjectController.extend({
  // Computed Properties
  ///////////////////////
  canDelete: function() {
    return this.get('model.user.id') === this.get('auth.currentUser.id');
  }.property('model.user'),

  readableCreateAtDate: function() {
    var createdAt = this.get('model.createdAt');
    var date = moment(createdAt);
    date.subtract('minutes', date.zone());
    return date.fromNow();
  }.property('model.createdAt'),

  // Actions
  ///////////
  actions: {
    deleteComment: function() {
      var comment = this.get('model');
      comment.deleteRecord();
      comment.save();
    }
  }
});