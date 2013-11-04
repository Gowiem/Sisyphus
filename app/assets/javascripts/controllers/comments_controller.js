Sis.CommentsController = Ember.ArrayController.extend({
  needs: ["subtask"],
  isShowingComments: false,
  hasComments: function() {
    return this.get('content.length') > 0 ? true : false;
  }.property('content.length'),
  commentsCount: function() {
    var comments = this.get('content');
    if (comments.get('length') === 1) {
      return "1 Comment";
    } else {
      return comments.get('length') + " Comments";
    }
  }.property('content.length'),
  actions: {
    openComments: function() {
      this.set('isShowingComments', true);
    },
    closeComments: function() {
      this.set('isShowingComments', false);
    }
  }
})