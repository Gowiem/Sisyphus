Sis.CommentsController = Ember.ArrayController.extend({
  needs: ["subtask"],
  sortProperties: ["createdAt"],
  sortAscending: false,
  isShowingComments: false,
  isShowingAllComments: false,

  // Computed Properties
  ///////////////////////
  mostRecentComments: function() {
    var len = this.get('content.length');
    if (len > 3) {
      return this.get('content').slice(len - 3, len);
    } else {
      return this.get('content');
    }
  }.property('content.length'),
  remainingCommentsCount: function() {
    var comments = this.get('content');
    if (comments.get('length') <= 3) {
      return false;
    } else if(comments.get('length') === 4) {
      return "1 more comment";
    } else {
      return (comments.get('length') - 3) + " more comments";
    }
  }.property('content.length'),
  hasComments: function() {
    return this.get('content.length') > 0 ? true : false;
  }.property('content.length'),
  newComment: function() {
    return this.store.createRecord(Sis.Comment, {});
  }.property(),
  commentsCount: function() {
    var comments = this.get('content');
    if (comments.get('length') === 1) {
      return "1 Comment";
    } else {
      return comments.get('length') + " Comments";
    }
  }.property('content.length'),

  // Observers
  /////////////
  showCommentsObserver: function() {
    this.set('isShowingComments', true);
  }.observes('target.model.showComments'),

  parentOpenObserver: function() {
    var isParentOpen = this.get('target.isViewing') || this.get('target.isEditing');
    this.set('isShowingComments', isParentOpen);
    if (isParentOpen === false) {
      this.set('isShowingAllComments', false);
    }
  }.observes('target.isViewing', 'target.isEditing'),

  // Actions
  ///////////
  actions: {
    openAllComments: function() {
      this.set('target.isViewing', true);
      this.set('isShowingComments', true);
      this.set('isShowingAllComments', true);
    },
    closeComments: function() {
      this.set('target.model.showComments', false);
      this.set('isShowingComments', false);
      this.set('isShowingAllComments', false);
    }
  }
});